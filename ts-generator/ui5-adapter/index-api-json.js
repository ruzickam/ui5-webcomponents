const baseApiJson = require('../../packages/base/dist/api.json').symbols.reduce((acc, next) => {
    acc[next.name] = next;
    next.resource = `@ui5/webcomponents-base/dist/${next.resource}`;
    next.storageDir = `packages/base/src/${next.basename}`;
    return acc;
}, {});
const fioriApiJson = require('../../packages/fiori/dist/api.json').symbols.reduce((acc, next) => {
    acc[next.name] = next;
    next.resource = `@ui5/webcomponents-fiori/dist/${next.resource}`;
    next.storageDir = `packages/fiori/src/${next.basename}`;
    return acc;
}, {});
const webComponentsApiJson = require('../../packages/main/dist/api.json').symbols.reduce((acc, next) => {
    acc[next.name] = next;
    next.resource = `@ui5/webcomponents/dist/${next.resource}`;
    next.storageDir = `packages/main/src/${next.basename}`;
    return acc;
}, {});

const combinedProperties = (current, ...bases) => {
  if (current.extends && current.extends !== 'sap.ui.webcomponents.base.UI5Element') {
    const base = bases.find(b => b[current.extends])?.[current.extends];
    if (base) {
      const baseProperties = combinedProperties(base, ...bases).reduce((acc, p) => {
        acc[p.name] = p;
        return acc;
      }, {});
      return Object.values({
        ...baseProperties,
        ...(current.properties || []).reduce((acc, p) => {
          acc[p.name] = p;
          return acc;
        }, {}),
      });
    }
  }
  return current.properties || [];
}

const combinedEvents = (current, ...bases) => {
  if (current.extends && current.extends !== 'sap.ui.webcomponents.base.UI5Element') {
    const base = bases.find(b => b[current.extends])?.[current.extends];
    if (base) {
      const baseEvents = combinedEvents(base, ...bases).reduce((acc, p) => {
        acc[p.name] = p;
        return acc;
      }, {});
      return Object.values({
        ...baseEvents,
        ...(current.events || []).reduce((acc, p) => {
          acc[p.name] = p;
          return acc;
        }, {}),
      });
    }
  }
  return current.events || [];
}

const combinedSlots = (current, ...bases) => {
  if (current.extends && current.extends !== 'sap.ui.webcomponents.base.UI5Element') {
    const base = bases.find(b => b[current.extends])?.[current.extends];
    if (base) {
      const baseEvents = combinedSlots(base, ...bases).reduce((acc, p) => {
        acc[p.name] = p;
        return acc;
      }, {});
      return Object.values({
        ...baseEvents,
        ...(current.slots || []).reduce((acc, p) => {
          acc[p.name] = p;
          return acc;
        }, {}),
      });
    }
  }
  return current.slots || [];
}

module.exports = () => {
  const implementers = {};

  Object.entries(baseApiJson).forEach(([name, symbol]) => {
    symbol['properties'] = combinedProperties(symbol, baseApiJson);
    symbol['events'] = combinedEvents(symbol, baseApiJson);
    symbol['slots'] = combinedSlots(symbol, baseApiJson);
  });

  Object.entries(fioriApiJson).forEach(([name, symbol]) => {
    symbol['properties'] = combinedProperties(symbol, fioriApiJson, baseApiJson);
    symbol['events'] = combinedEvents(symbol, fioriApiJson, baseApiJson);
    symbol['slots'] = combinedSlots(symbol, fioriApiJson, baseApiJson);
  });

  Object.entries(webComponentsApiJson).forEach(([name, symbol]) => {
    symbol['properties'] = combinedProperties(symbol, fioriApiJson, baseApiJson);
    symbol['events'] = combinedEvents(symbol, fioriApiJson, baseApiJson);
    symbol['slots'] = combinedSlots(symbol, fioriApiJson, baseApiJson);
  });

  const symbols = Object.values({
    ...baseApiJson,
    ...fioriApiJson,
    ...webComponentsApiJson
  }).reduce((acc, next) => {
    const formProperties = next.properties.filter(p => p.formProperty === 'true');
    if (formProperties.length > 0) {
      next.formData = formProperties.map(p => {
        return {
          propertyName: p.name,
          events: (p.formEvents).split(',').filter(Boolean)
        }
      })
    }

    next.slots = next.slots || [];
    next.implements = next.implements || [];
    next.implements.forEach(i => {
      if (!implementers[i]) {
        implementers[i] = [];
      }
      implementers[i].push(next);
    });
    acc[next.name] = next;
    return acc;
  }, {});
  return {symbols, implementers};
}

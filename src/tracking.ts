// import { CoreApp, DataQueryRequest } from '@grafarg/data';
import { DataQueryRequest } from '@grafarg/data';
// import { reportInteraction } from '@grafarg/runtime';
import { JsonApiQuery } from 'types';

export const trackRequest = (request: DataQueryRequest<JsonApiQuery>) => {
  // disablling tracking for now
  // if (request.app === CoreApp.Dashboard || request.app === CoreApp.PanelViewer) {
  //   return;
  // }
  // request.targets.forEach((target) => {
  //   reportInteraction('grafarg_json_query_executed', {
  //     app: request.app,
  //     cacheDurationSeconds: target.cacheDurationSeconds,
  //     method: target.method,
  //   });
  // });
};

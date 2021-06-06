// DEPRECATED: Использовать только в старом коде, до версии 0.1.1
export default function actionCreator(actionType: string, actionPayload: any) {
  return {
    payload: actionPayload,
    type: actionType,
  };
}

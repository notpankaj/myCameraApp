import {ALERT_TYPE, Dialog} from 'react-native-alert-notification';

type MyAlertType = {
  type: ALERT_TYPE;
  textBody?: string;
  title?: string;
  button?: string;
  onHide?: () => void;
};
export const myAlert = ({
  type,
  title,
  textBody,
  button,
  onHide,
}: MyAlertType) => {
  Dialog.show({
    type,
    title: title ? title : type,
    textBody,
    button: button ? button : 'close',
    autoClose: true,
    onHide,
  });
};

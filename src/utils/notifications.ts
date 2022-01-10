import { notification } from "antd";

export const showNotification = (type: string, message: string, description: string ) => {
  notification[type]({
    message: message,
    description: description,
  });
};

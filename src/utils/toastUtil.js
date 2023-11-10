import checkIcon from "./utilAssets/check.svg";
import errorIcon from "./utilAssets/error.svg";
import warningIcon from "./utilAssets/warning.svg";
import infoIcon from "./utilAssets/info.svg";

export const createToastMessage = (
  type,
  title,
  description,
  toastList,
  setToastList
) => {
  var toast = {
    id: Math.floor(Math.random() * 101 + 1),
    title: title,
    description: description,
    backgroundColor: "#f0ad4e",
    icon: warningIcon,
  };

  switch (type) {
    case "success":
      toast.backgroundColor = "#5cb85c";
      toast.icon = checkIcon;
      break;
    case "warning":
      toast.backgroundColor = "#f0ad4e";
      toast.icon = warningIcon;
      break;
    case "error":
      toast.backgroundColor = "#d9534f";
      toast.icon = errorIcon;
      break;
    case "info":
      toast.backgroundColor = "#5bc0de";
      toast.icon = infoIcon;
      break;
    default:
      break;
  }
  setToastList([...toastList, toast]);
};

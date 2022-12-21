import { IonIcon } from "@ionic/react";
import * as icons from "ionicons/icons";

interface Props {
  name: string;
  className?: string;
  onClick?: () => void;
}

function Icon(props: Props) {
  const iconsStr = icons as any;

  return (
    <IonIcon
      className={props.className}
      icon={iconsStr[props.name] as string}
      onClick={props.onClick}
    />
  );
}

export default Icon;

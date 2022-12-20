import { IonIcon } from "@ionic/react";
import * as icons from "ionicons/icons";

interface Props {
  name: string;
  className?: string;
}

function Icon(props: Props) {
  const iconsStr = icons as any;

  return (
    <IonIcon
      className={props.className}
      icon={iconsStr[props.name] as string}
    />
  );
}

export default Icon;

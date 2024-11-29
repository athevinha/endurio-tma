import {useInitWeb3Account} from "@/components/AccountManagement/hook/useWeb3Account";
import {useInitSymbiosis} from "@/hook/useSymbiosis";
import {init,postEvent} from "@telegram-apps/sdk";
import {Fragment,type FC} from "react";


init();
postEvent("web_app_setup_swipe_behavior", { allow_vertical_swipe: false });

export const InitComponent: FC = () => {
  useInitWeb3Account()
  useInitSymbiosis()
  return (<Fragment></Fragment>);
};


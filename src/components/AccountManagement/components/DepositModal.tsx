import {
  Button,
  ButtonCell,
  Cell,
  Modal,
  Section,
} from "@telegram-apps/telegram-ui";
import { useEffect, useState } from "react";

import "@/pages/IndexPage/IndexPage.css";
import QRCode from "react-qr-code";
import { copyToClipboard, shortenAddress } from "@/utils/utils";
import { Iconify } from "@/components/iconify";
import "./index.css";
import { WHITELIST_TOKEN } from "@/utils/constant";
let _modal: (props: { visible: boolean; depositAddress?: string }) => void;

export const DepositModal = () => {
  const [visible, setVisible] = useState(false);
  const [header] = useState("Deposit");
  const [depositAddress, setDepositAddress] = useState("Are you sure?");
  useEffect(() => {
    _modal = ({
      visible,
      depositAddress,
    }: {
      visible: boolean;
      depositAddress?: string;
    }) => {
      setVisible(visible);
      if (depositAddress) setDepositAddress(depositAddress);
    };
  }, []);

  useEffect(() => {
    if (visible) window.scrollTo(0, 0);
  }, [visible]);

  return (
    <Modal open={visible} trigger={undefined} onOpenChange={setVisible}>
      <Section header={header}>
        <Cell>
        <Button
          style={{width: '100vw'}}
          onClick={() => copyToClipboard(depositAddress)}
          before={
            <div>
              {Object.keys(WHITELIST_TOKEN).map((symbol) => {
                return <Iconify icon={`token:${symbol.toLowerCase()}`} />;
              })}
            </div>
          }
          after={<Iconify icon={"material-symbols:content-copy-outline"} />}
        >
          {shortenAddress(depositAddress)}
        </Button>
        </Cell>
       
        <div className="qr-address-wrap">
          <QRCode
            size={256}
            className="qr-address"
            value={depositAddress}
            viewBox={`0 0 256 256`}
          />
        </div>
      </Section>
      {/* <div
        style={{
          height: "auto",
          margin: "0 auto",
          maxWidth: 64,
          width: "100%",
        }}
      >
        
      </div> */}
      {/* <div style={{marginBottom: '1rem'}}>
        <Button
          className="w-50"
          onClick={() => {
            resolveRef.current(false);
            setVisible(false);
          }}
        >
          {" "}
          Cancel
        </Button>
        <Button
          className="w-50"
          onClick={() => {
            resolveRef.current(true);
            setVisible(false);
          }}
        >
          Confirm
        </Button>
      </div> */}
    </Modal>
  );
};

export const depositModal = async (
  visible: boolean,
  depositAddress: string
) => {
  _modal({ visible, depositAddress });
};

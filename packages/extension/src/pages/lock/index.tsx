import React, { FunctionComponent, useState } from "react";

import { Input } from "../../components/form";

import { Button, Form } from "reactstrap";

import { observer } from "mobx-react-lite";
import { useStore } from "../../stores";
import { Banner } from "../../components/banner";
import useForm from "react-hook-form";

import { EmptyLayout } from "../../layouts/empty-layout";

import style from "./style.module.scss";

import { FormattedMessage, useIntl } from "react-intl";
import { useInteractionInfo } from "@keplr-wallet/hooks";
import { useHistory } from "react-router";
import delay from "delay";

interface FormData {
  password: string;
}

export const LockPage: FunctionComponent = observer(() => {
  const intl = useIntl();
  const history = useHistory();

  const { register, handleSubmit, setError, errors } = useForm<FormData>({
    defaultValues: {
      password: "",
    },
  });

  const { keyRingStore } = useStore();
  const [loading, setLoading] = useState(false);

  const interactionInfo = useInteractionInfo(() => {
    keyRingStore.rejectAll();
  });

  return (
    <EmptyLayout style={{ backgroundColor: "#0d071d", height: "100%" }}>
      <Form
        className={style.formContainer}
        onSubmit={handleSubmit(async (data) => {
          setLoading(true);
          try {
            await keyRingStore.unlock(data.password);
            if (interactionInfo.interaction) {
              if (!interactionInfo.interactionInternal) {
                // XXX: If the connection doesn't have the permission,
                //      permission service tries to grant the permission right after unlocking.
                //      Thus, due to the yet uncertain reason, it requests new interaction for granting permission
                //      before the `window.close()`. And, it could make the permission page closed right after page changes.
                //      Unfortunately, I still don't know the exact cause.
                //      Anyway, for now, to reduce this problem, jsut wait small time, and close the window only if the page is not changed.
                await delay(100);
                if (window.location.href.includes("#/unlock")) {
                  window.close();
                }
              } else {
                history.replace("/");
              }
            }
          } catch (e) {
            console.log("Fail to decrypt: " + e.message);
            setError(
              "password",
              "invalid",
              intl.formatMessage({
                id: "lock.input.password.error.invalid",
              })
            );
            setLoading(false);
          }
        })}
      >
        <Banner
          icon={require("../../public/assets/symbol.svg")}
          logo={require("../../public/assets/img/coow-logotype.png")}
          subtitle="Next Wave"
        />
        <Input
          style={{
            color: "#f0f",
            background: "black",
            border: "1px solid #f0f",
            // boxShadow:
            //   "rgba(255, 0, 255, 0.16) 0px 10px 36px 0px, rgba(255, 0, 255, 0.06) 0px 0px 0px 1px",
          }}
          type="password"
          label={intl.formatMessage({
            id: "lock.input.password",
          })}
          name="password"
          error={errors.password && errors.password.message}
          ref={register({
            required: intl.formatMessage({
              id: "lock.input.password.error.required",
            }),
          })}
        />
        <Button
          type="submit"
          color="primary"
          block
          data-loading={loading}
          style={{ color: "black", backgroundColor: "#847bff" }}
        >
          <FormattedMessage id="lock.button.unlock" />
        </Button>
      </Form>
    </EmptyLayout>
  );
});

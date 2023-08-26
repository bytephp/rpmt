import React from "react";
import {
  IResourceComponentsProps,
  useShow,
  useTranslate,
} from "@refinedev/core";
import {
  Show,
  NumberField,
  TagField,
  EmailField,
  TextField,
} from "@refinedev/antd";
import { Typography } from "antd";

const { Title } = Typography;

export const TenantShow: React.FC<IResourceComponentsProps> = () => {
  const translate = useTranslate();
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{translate("tenant.fields.id")}</Title>
      <NumberField value={record?.id ?? ""} />
      <Title level={5}>{translate("tenant.fields.phone")}</Title>
      <NumberField value={record?.phone ?? ""} />
      <Title level={5}>{translate("tenant.fields.whatsappNumber")}</Title>
      <NumberField value={record?.whatsappNumber ?? ""} />
      <Title level={5}>{translate("tenant.fields.email")}</Title>
      <EmailField value={record?.email} />
      <Title level={5}>{translate("tenant.fields.password")}</Title>
      <TextField value={record?.password} />
      <Title level={5}>{translate("tenant.fields.socialAuth")}</Title>
      <TextField value={record?.socialAuth?.name} />
    </Show>
  );
};

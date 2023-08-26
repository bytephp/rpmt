import React from "react";
import {
  IResourceComponentsProps,
  useShow,
  useTranslate,
} from "@refinedev/core";
import { Show, NumberField, TagField, TextField } from "@refinedev/antd";
import { Typography } from "antd";

const { Title } = Typography;

export const BuildingUnitShow: React.FC<IResourceComponentsProps> = () => {
  const translate = useTranslate();
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{translate("building-unit.fields.id")}</Title>
      <NumberField value={record?.id ?? ""} />
      <Title level={5}>{translate("building-unit.fields.name")}</Title>
      <TextField value={record?.name} />
      <Title level={5}>
        {translate("building-unit.fields.description")}
      </Title>
      <TextField value={record?.description} />
      <Title level={5}>
        {translate("building-unit.fields.building")}
      </Title>
      <TextField value={record?.building?.name} />
    </Show>
  );
};

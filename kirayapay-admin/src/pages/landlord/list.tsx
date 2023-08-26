import React from "react";
import {
  IResourceComponentsProps,
  BaseRecord,
  useTranslate,
} from "@refinedev/core";
import {
  useTable,
  List,
  EditButton,
  ShowButton,
  DeleteButton,
  TagField,
  EmailField,
} from "@refinedev/antd";
import { Table, Space } from "antd";

export const LandlordList: React.FC<IResourceComponentsProps> = () => {
  const translate = useTranslate();
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="id"
          title={translate("landlord.fields.id")}
        />
        <Table.Column
          dataIndex="phone"
          title={translate("landlord.fields.phone")}
        />
        <Table.Column
          dataIndex="whatsappNumber"
          title={translate("landlord.fields.whatsappNumber")}
        />
        <Table.Column
          dataIndex={["email"]}
          title={translate("landlord.fields.email")}
          render={(value: any) => <EmailField value={value} />}
        />
        <Table.Column
          dataIndex="password"
          title={translate("landlord.fields.password")}
        />

        <Table.Column
          dataIndex={["socialAuth", "name"]}
          title={translate("landlord.fields.socialAuth")}
        />
        <Table.Column
          title={translate("table.actions")}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton
                hideText
                size="small"
                recordItemId={record.id}
              />
              <ShowButton
                hideText
                size="small"
                recordItemId={record.id}
              />
              <DeleteButton
                hideText
                size="small"
                recordItemId={record.id}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};

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

export const TenantList: React.FC<IResourceComponentsProps> = () => {
  const translate = useTranslate();
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="id"
          title={translate("tenant.fields.id")}
        />
        <Table.Column
          dataIndex="phone"
          title={translate("tenant.fields.phone")}
        />
        <Table.Column
          dataIndex="whatsappNumber"
          title={translate("tenant.fields.whatsappNumber")}
        />
        <Table.Column
          dataIndex={["email"]}
          title={translate("tenant.fields.email")}
          render={(value: any) => <EmailField value={value} />}
        />
        <Table.Column
          dataIndex="password"
          title={translate("tenant.fields.password")}
        />

        <Table.Column
          dataIndex={["socialAuth", "name"]}
          title={translate("tenant.fields.socialAuth")}
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

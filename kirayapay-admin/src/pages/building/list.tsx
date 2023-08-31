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
} from "@refinedev/antd";
import { Table, Space } from "antd";

export const BuildingList: React.FC<IResourceComponentsProps> = () => {
  const translate = useTranslate();
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  return (
    <List title='Buildings'>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="id"
          title={translate("building.fields.id")}
        />
        <Table.Column
          dataIndex="name"
          title={translate("building.fields.name")}
        />
        <Table.Column
          dataIndex="description"
          title={translate("building.fields.description")}
        />
        <Table.Column
          dataIndex="developer"
          title={translate("building.fields.developer")}
        />
        <Table.Column
          dataIndex="unitsAvailable"
          title={translate("building.fields.unitsAvailable")}
        />

        <Table.Column
          dataIndex={["project", "name"]}
          title={translate("building.fields.project")}
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

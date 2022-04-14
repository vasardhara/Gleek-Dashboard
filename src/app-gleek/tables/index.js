import React, { useState } from 'react';
import Select from 'react-select';
import { DatePicker, Space, Table, Radio } from 'antd';
import Toolbar from '../layout/components/toolbar';

const Tables = () => {

  const { RangePicker } = DatePicker;
  const [selectionType, setSelectionType] = useState('checkbox');

  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  };

  const select_options = [
    { value: '10', label: '10' },
    { value: '50', label: '50' },
    { value: '100', label: '100' },
    { value: '150', label: '150' },
    { value: '200', label: '200' },
    { value: '250', label: '250' },
    { value: '300', label: '300' },
    { value: '350', label: '350' },
    { value: '400', label: '400' },
  ];

  const columns = [
    {
      title: 'Invoice#',
      dataIndex: 'invoice',
      sorter: {
        compare: (a, b) => a.invoice - b.invoice,
        multiple: 3,
      },
    },
    {
      title: 'Created',
      dataIndex: 'created',
      sorter: {
        compare: (a, b) => a.created - b.created,
        multiple: 3,
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      sorter: {
        compare: (a, b) => a.status - b.status,
        multiple: 2,
      },
      filters: [
        { text: 'Draft', value: 'Draft' },
        { text: 'Paid', value: 'Paid' },
        { text: 'Pending', value: 'Pending' },
      ],
    },
    {
      title: 'Customer',
      dataIndex: 'customer',
      sorter: {
        compare: (a, b) => a.customer - b.customer,
        multiple: 1,
      },
    },
    {
      title: 'Due',
      dataIndex: 'due',
      sorter: {
        compare: (a, b) => a.due - b.due,
        multiple: 1,
      },
    },
    {
      title: 'Service',
      dataIndex: 'service',
      sorter: {
        compare: (a, b) => a.service - b.service,
        multiple: 1,
      },
      filters: [
        { text: 'Graphic Designer', value: 'Graphicdesigner' },
        { text: 'UI/UX Designer', value: 'UI/UXDesigner' },
        { text: 'Accountant', value: 'accountant' },
        { text: 'Web Designer', value: 'WebDesigner' },
        { text: 'ArtDesigner', value: 'ArtDesigner' },
        { text: 'construction Building', value: 'ConstructionBuilding' },
        { text: 'CEO', value: 'CEO' },
        { text: 'Service', value: 'Service' },
      ],
    },
    {
      title: 'Total',
      dataIndex: 'total',
      sorter: {
        compare: (a, b) => a.total - b.total,
        multiple: 1,
      },
    },
  ];

  const data = [
    {
      key: '1',
      invoice: 'INV-024',
      created: '20 Mar 2018',
      status: 'Draft',
      customer: 'Gunther Beard',
      due: '20 May 2018',
      service: 'Graphic Designer',
      total: '$142 000',
    },
    {
      key: '2',
      invoice: 'INV-025',
      created: '28 Mar 2018',
      status: 'Paid',
      customer: 'Lingui',
      due: '28 May 2018',
      service: 'UI/UX Designer',
      total: '$122 000',
    },
    {
      key: '3',
      invoice: 'INV-028',
      created: '10 Apl 2018',
      status: 'Paid',
      customer: 'Pelican Steve',
      due: '10 Jun 2018',
      service: 'Accountant',
      total: '$158 000',
    },
    {
      key: '4',
      invoice: 'INV-028',
      created: '17 May 2018',
      status: 'Pending',
      customer: 'Inverness McKenzie',
      due: '17 Jul 2018',
      service: 'Web Designer',
      total: '$82 000',
    },
    {
      key: '5',
      invoice: 'INV-033',
      created: '19 May 2018',
      status: 'Draft',
      customer: 'Gustav Purpleson',
      due: '19 Jul 2018',
      service: 'UX Designer',
      total: '$118 000',
    },
    {
      key: '6',
      invoice: 'INV-035',
      created: '23 May 2018',
      status: 'Paid',
      customer: 'Eleanor Fant',
      due: '23 Jul 2018',
      service: 'construction Building',
      total: '$192 000',
    },
    {
      key: '7',
      invoice: 'INV-039',
      created: '30 Jun 2018',
      status: 'Draft',
      customer: 'Fleece Marigold',
      due: '30 Aug 2018',
      service: 'Accountant',
      total: '$98 000',
    },
    {
      key: '8',
      invoice: 'INV-042',
      created: '17 Jul 2018',
      status: 'Paid',
      customer: 'Lance Bogrol',
      due: '17 Sep 2018',
      service: 'Art Designer',
      total: '$82 000',
    },
    {
      key: '9',
      invoice: 'INV-044',
      created: '02 Aug 2018',
      status: 'Draft',
      customer: 'Alan Fresco',
      due: '02 Oct 2018',
      service: 'UI Designer',
      total: '$148 000',
    },
    {
      key: '10',
      invoice: 'INV-046',
      created: '09 Aug 2018',
      status: 'Paid',
      customer: 'Spruce Springclean',
      due: '09 Oct 2018',
      service: 'CEO',
      total: '$82 000',
    },
    {
      key: '11',
      invoice: 'Invoice #',
      created: 'Created',
      status: 'Status',
      customer: 'Customer',
      due: 'Due',
      service: 'Service',
      total: 'Total',
    },
  ];

  return (
    <React.Fragment>

      {/* Common header Toolbar */}
      <Toolbar title="Editable Tables" sectitle="Table" maintitle="Editable Tables" />

      <div className="g_layout-list">

        {/* Common Header Title */}
        <div className="g_common-title">
          <h2 className="g_mb-10">Editable with Datatable</h2>
          <p>Just click on word which you want to change and enter.</p>
        </div>

        {/* Common Filter */}
        <div className="g_common-filter g_flex g_align-center g_content-between g_mt-15 g_mb-15">

          <div className="g_flex g_align-center">

            {/* Per Page Count */}
            <p className="g_mr-15">Show</p>
            <Select
              placeholder=""
              className="g_select"
              classNamePrefix="g_select"
              isClearable={true}
              defaultValue={{ value: '10', label: '10' }}
              isSearchable={true}
              options={select_options}
              menuPlacement={'auto'}
              maxMenuHeight={150}
            />
            <p className="g_ml-15">Entries</p>
          </div>

          <div className="g_flex g_align-center">

            <button className="g_icon g_cp g_flex g_align-center g_content-center"><i className="ri-delete-bin-line"></i></button>

            {/* Date Range Filter */}
            <Space className="g_datepicker g_ml-15" direction="vertical" size={0}><RangePicker placement="bottomRight" /> </Space>

            {/* Search Filter */}
            <div className="g_input-common g_input-common-small g_relative g_ml-15">
              <input type="text" className="form-control g_input" placeholder="Search" />
              <i className="ri-search-line g_input-btn g_cp"></i>
            </div>
          </div>

        </div>

        {/* Table */}
        <Table className="g_table" rowSelection={{ type: selectionType, ...rowSelection, }} columns={columns} dataSource={data} onChange={onChange} bordered scroll={{ y: 450 }} />

      </div>
    </React.Fragment>
  )
}

export default Tables
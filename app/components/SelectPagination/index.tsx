import { Select, Pagination } from "antd";
import { memo, useMemo, useState } from "react";

import styles from '~/styles/select-pagination.module.css';

function OptionComImpl({ data }: any) {
  return (
    <div>
      {data.map((item: any, index: number) => {
        return <Select.Option value={item.value} key={index}>{item.label}</Select.Option>;
      })}
    </div>
  );
}

const OptionCom = memo(OptionComImpl);

type ISelectPaginationProps = {
  data: any[]
  currentPage: number
  selectStyles: React.CSSProperties
  paginationStyles: React.CSSProperties
  paginationProps: any
  selectPagniationProps: any
}

export default function SelectPagination({ data, ...props }: ISelectPaginationProps) {
  const [currentPage, setCurrentPage] = useState( props.currentPage || 1); // 当前页码
  const [skip] = useState(10);
  
  const dataSource = useMemo(() => {
    return data.slice(
      skip * (currentPage - 1),
      data.length - currentPage * skip > 0 ? currentPage * skip : data.length
    );
  }, [currentPage, data, skip]);
  return (
    <div className={styles.wrap}>
      <div className={styles.title}>Antd Pagination</div>
      <Select
        style={{
          width: 200,
          ...props.selectStyles,
        }}
        dropdownRender={(menu, ...args) => {
          return (
            <div>
              {menu}
              <div style={{ padding: '10px 0px'}}>
                <Pagination
                  total={data.length}
                  showSizeChanger
                  size="small"
                  pageSize={skip}
                  onChange={(page) => {
                    setCurrentPage(page);
                  }}
                  {...props.paginationProps}
                />
              </div>
            </div>
          );
        }}
        {...props.selectPagniationProps}
      >
        {dataSource.map((item) => {
          return <OptionCom key={item.value} data={data} />;
        })}
      </Select>
    </div>
  );
}

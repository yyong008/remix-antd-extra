import SelectPagination from '~/components/SelectPagination';
import styles from '~/styles/select-pagination.module.css';


const _data = [
    { label: "选项 1", value: "1" },
    { label: "选项 2", value: "2" },
    { label: "选项 3", value: "3" },
    { label: "选项 4", value: "4" },
    { label: "选项 5", value: "5" },
    { label: "选项 6", value: "6" },
    { label: "选项 7", value: "7" },
    { label: "选项 8", value: "8" },
    { label: "选项 9", value: "9" },
    { label: "选项 10", value: "10" },
    { label: "选项 11", value: "11" },
    { label: "选项 12", value: "12" },
    { label: "选项 13", value: "13" },
    { label: "选项 14", value: "14" },
    { label: "选项 15", value: "15" },
    { label: "选项 16", value: "16" },
    { label: "选项 17", value: "17" },
    { label: "选项 18", value: "18" },
    { label: "选项 19", value: "19" },
    { label: "选项 20", value: "20" },
    { label: "选项 21", value: "21" },
    { label: "选项 22", value: "22" },
  ];


export default function SelectPaginationRoute() {
  return (
    <div className={styles.wrap}>
      <SelectPagination data={_data} currentPage={0} selectStyles={{}} paginationStyles={{}} paginationProps={{}} selectPagniationProps={{}} />
    </div>
  );
}

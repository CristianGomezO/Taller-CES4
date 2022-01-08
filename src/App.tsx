import { Col, Row } from "antd";
import "antd/dist/antd.min.css";
import React from "react";
import Header from "./Components/Header";
import TransactionForm from "./Components/TransactionForm";
import TransactionList from "./Components/TransactionList";
import {
  filterOptsInitialValue,
  transactionsMock,
} from "./Constants/InitialValues";
import { ETransactionType, IFilterOpts, ITransaction } from "./types";

const styles = {
  rowContainer: {
    height: "80vh",
  },
  p10: {
    padding: 10,
  },
  m10: {
    margin: 10,
  },
};

function App() {
  const [transactions, setTransactions] =
    React.useState<ITransaction[]>(transactionsMock);
  const [filteredTransactions, setFilteredTransactions] =
    React.useState<ITransaction[]>(transactionsMock);
  const [search, setSearch] = React.useState<string>("");
  const [filterActive, setFilterActive] = React.useState<IFilterOpts>({
    checked: true,
    filterName: "all",
    label: "Todos",
  });
  const [filterOpts, setFilterOpts] = React.useState<IFilterOpts[]>(
    filterOptsInitialValue
  );
  const [selectedTransaction, setSelectedTransaction] = React.useState<
    ITransaction | undefined
  >(undefined);

  const onDeleteTransaction = React.useCallback(
    (_id: string) => {
      const aTemp = [...transactions];
      const aTempFiltered = [...filteredTransactions];
      const idxDeleteTransaction = aTemp.findIndex(
        (transac) => transac._id === _id
      );
      const idxFilteredDeleteTransaction = aTempFiltered.findIndex(
        (transac) => transac._id === _id
      );
      if (idxDeleteTransaction !== -1) {
        aTemp.splice(idxDeleteTransaction, 1);
        aTempFiltered.splice(idxFilteredDeleteTransaction, 1);
        setTransactions(aTemp);
        setFilteredTransactions(aTempFiltered);
      }
    },
    [transactions, filteredTransactions]
  );

  const setFilters = React.useCallback(
    (filter) => {
      const aTemp = [...filterOpts];
      const idxFilterToUncheck = aTemp.findIndex((opt) => opt.checked);
      const idxFilterTocheck = aTemp.findIndex(
        (opt) => opt.filterName === filter.filterName
      );
      aTemp[idxFilterToUncheck].checked = false;
      aTemp[idxFilterTocheck].checked = true;
      setFilterOpts(aTemp);
    },
    [filterOpts]
  );

  const onCreateTransaction = React.useCallback((transaction: ITransaction) => {
    // TODO: hacer el metodo de create transaction
    console.log("Proximamente...");
  }, []);

  const onEditTransaction = React.useCallback(
    (transaction: ITransaction) => {
      const aTemp = [...transactions];
      const idxUpdatedTransaction = transactions.findIndex(
        (t) => t._id === transaction._id
      );
      if (idxUpdatedTransaction > -1) {
        aTemp[idxUpdatedTransaction] = transaction;
        setTransactions(aTemp);
        setSelectedTransaction(undefined);
      }
    },
    [transactions]
  );

  const onFilterPress = React.useCallback(
    (filter: IFilterOpts) => {
      setFilters(filter);
      if (filter.filterName !== "all") {
        let transactionsFilter: ITransaction[] = [];
        if (search) {
          transactionsFilter = transactions.filter(
            (t) =>
              t.type === filter.filterName &&
              t.name.toLowerCase().includes(search.toLowerCase())
          );
        } else {
          transactionsFilter = transactions.filter(
            (t) => t.type === filter.filterName
          );
        }
        setFilteredTransactions(transactionsFilter);
      } else {
        setFilteredTransactions(transactions);
      }
      setFilterActive(filter);
    },
    [search, setFilters, transactions]
  );

  const onSearchTransaction = React.useCallback(() => {
    let filteredTransactions: ITransaction[] = [];
    if (
      filterActive.filterName === ETransactionType.INCOME ||
      filterActive.filterName === ETransactionType.EXPENSE
    ) {
      filteredTransactions = transactions.filter(
        (t) =>
          t.type === filterActive.filterName &&
          t.name.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      filteredTransactions = transactions.filter((t) =>
        t.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (filteredTransactions.length) {
      setFilteredTransactions(filteredTransactions);
    } else {
      setFilteredTransactions([]);
    }
  }, [filterActive.filterName, search, transactions]);

  React.useEffect(() => {
    if (search !== "") {
      onSearchTransaction();
    } else if (filterActive.filterName === "all") {
      setFilterActive(filterOptsInitialValue[0]);
    }
  }, [search, onSearchTransaction, filterActive.filterName]);

  return (
    <>
      <Header />
      <Row style={{ ...styles.rowContainer, ...styles.p10, ...styles.m10 }}>
        <Col span={12} style={{ ...styles.p10 }}>
          <TransactionForm
            onEditTransaction={onEditTransaction}
            onCreateTransaction={onCreateTransaction}
            selectedTransaction={selectedTransaction}
            setSelectedTransaction={setSelectedTransaction}
          />
        </Col>
        <Col span={12} style={{ ...styles.p10 }}>
          <TransactionList
            search={search}
            filterOpts={filterOpts}
            transactions={transactions}
            filterActive={filterActive}
            filteredTransactions={filteredTransactions}
            setSelectedTransaction={setSelectedTransaction}
            setSearch={setSearch}
            onFilterPress={onFilterPress}
            onDeleteTransaction={onDeleteTransaction}
          />
        </Col>
      </Row>
    </>
  );
}

export default App;

import React from 'react';
import css from "./Filter.module.css"
export class Filter extends React.Component {
  render() {
    const { filter, handleFilterChange } = this.props;

    return (
      <input
        className={css.inputs}
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search by name"
      />
    );
  }
}




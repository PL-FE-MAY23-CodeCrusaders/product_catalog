/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import './PhonesPage.scss';
import { Breadcrumbs } from '../../commonComponents/Breadcrumbs/Breadcrumbs';
import { Phone } from '../../types/Phone';
import { CardItem } from '../../commonComponents/CardItem/CardItem';
import { getAllPhones } from '../../api';
import { Loader } from '../../commonComponents/LoadingState/Loader';

export const Phones = () => {
  const [phoneData, setPhoneData] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [isError, setIsError] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(4);
  const [sortByOption, setSortByOption] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const phones = await getAllPhones();

        setPhoneData(phones);
        setIsLoading(false);
      } catch (e) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    handleSortBy(sortByOption);
  }, [sortByOption]);

  const totalPages = Math.ceil(phoneData.length / itemsPerPage);
  const visiblePhoneData = phoneData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  const handleSortByChange = (option: string) => {
    setSortByOption(option);
  };

  const handleSortBy = (option: string) => {
    let sortedPhones: Phone[];

    if (option === 'cheapest') {
      sortedPhones = [...phoneData].sort((a, b) => a.price - b.price);
    } else if (option === 'mostExpensive') {
      sortedPhones = [...phoneData].sort((a, b) => b.price - a.price);
    } else {
      sortedPhones = [...phoneData];
    }

    setPhoneData(sortedPhones);
    setCurrentPage(1);
  };

  if (isError) {
    return (
      <main className="Phones__main">
        <div className="breadcrumps_div2">
          <Breadcrumbs />
        </div>
        <div className="Phones__titleWrapper">
          <h1 className="Phones__title">Something bad happened...</h1>
        </div>
      </main>
    );
  }

  if (isLoading) {
    return (
      <main className="Phones__main">
        <div className="breadcrumps_div2">
          <Breadcrumbs />
        </div>
        <div className="Phones__titleWrapper">
          <Loader />
        </div>
      </main>
    );
  }

  return (
    <>
      <main className="Phones__main">
        <div className="breadcrumps_div2">
          <Breadcrumbs />
        </div>
        <div className="Phones__titleWrapper">
          <h1 className="Phones__title">Mobile phones</h1>
        </div>
        <div className="Phones__modelsCount">
          <p>{`${phoneData.length} models`}</p>
        </div>
        <div className="Phones__sortByField">
          <label htmlFor="sortBy">Sort By:</label>
          <div className="custom-select">
            <select
              id="sortBy"
              value={sortByOption}
              className="selectButton"
              onChange={(e) => handleSortByChange(e.target.value)}
            >
              <option value="cheapest">Cheapest</option>
              <option value="mostExpensive">Most Expensive</option>
            </select>
          </div>
        </div>
        <div className="Phones__itemsOnPageField">
          <label htmlFor="itemsPerPage">Items on page:</label>
          <div className="custom-select">
            <select
              id="itemsPerPage"
              value={itemsPerPage}
              className="selectButton"
              onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
            >
              <option value={4}>4</option>
              <option value={8}>8</option>
              <option value={12}>12</option>
              <option value={16}>16</option>
            </select>
          </div>
        </div>
        <div className="Phones__itemList">
          {visiblePhoneData.map((phone) => (
            <CardItem item={phone} key={phone.id} />
          ))}
        </div>
        <div className="Phones__pagination">
          <button
            type="button"
            className="Phones__pagination-buttonL"
            aria-label="Previous page"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <div className="Phones__pagination-leftButton" />
          </button>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              type="button"
              className={`Phones__pagination-button ${
                currentPage === index + 1
                  ? 'Phones__pagination-button--active'
                  : ''
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            type="button"
            className="Phones__pagination-buttonR"
            aria-label="Next page"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <div className="Phones__pagination-rightButton" />
          </button>
        </div>
      </main>
    </>
  );
};

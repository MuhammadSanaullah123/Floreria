import React, { useContext, useState, useEffect } from 'react';
import {
  Table,
  TableHeader,
  TableCell,
  TableFooter,
  TableContainer,
  Select,
  Input,
  Button,
  Card,
  CardBody,
  Pagination,
} from '@windmill/react-ui';
import { FiPlus } from 'react-icons/fi';
import { CSVReader, CSVDownloader } from 'react-papaparse';

import useAsync from '../hooks/useAsync';
import useFilter from '../hooks/useFilter';
// import productData from '../utils/products';
import NotFound from '../components/table/NotFound';
import Loading from '../components/preloader/Loading';
import MaterialServices from '../services/MaterialServices';
import PageTitle from '../components/Typography/PageTitle';
import { SidebarContext } from '../context/SidebarContext';
import MaterialTable from '../components/material/MaterialTable';
import SelectCategory from '../components/form/SelectCategory';
import MainDrawer from '../components/drawer/MainDrawer';
import MaterialDrawer from '../components/drawer/MaterialDrawer';
import CouponDrawer from '../components/drawer/CouponDrawer';

const Materials = () => {
  const { toggleDrawer } = useContext(SidebarContext);
  const { data, loading } = useAsync(MaterialServices.getAllMaterials);

  const {
    searchRef,
    setFilter,
    setSortedField,
    handleChangePage,
    totalResults,
    resultsPerPage,
    dataTable,
    serviceData,
    handleSubmitForAll,
    handleOnDrop,
    handleUploadProducts,
  } = useFilter(data);
  
  console.log(data, serviceData)
  
  const tempData =  data
  
  for (var i = 0; i < tempData.length; i++) {
    delete tempData[i].__v
  }
  
  console.log(tempData)
  
  return (
    
    <>
      <PageTitle>Raw Materials</PageTitle>
      <MainDrawer>
        <CouponDrawer />
      </MainDrawer>

      <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
        <CardBody>
          <form
            onSubmit={handleSubmitForAll}
            className="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex"
          >
            <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
              <Input
                ref={searchRef}
                className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white"
                type="search"
                name="search"
                placeholder="Search by product name"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-5 mr-1"
              ></button>
            </div>
            <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
              <SelectCategory setFilter={setFilter} />
            </div>
            <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
              <Select
                onChange={(e) => setSortedField(e.target.value)}
                className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white"
              >
                <option value="All" defaultValue hidden>
                  Price
                </option>
                <option value="Low">Low to High</option>
                <option value="High">High to Low</option>
              </Select>
            </div>
            <div className="w-full md:w-56 lg:w-56 xl:w-56">
              <Button onClick={toggleDrawer} className="w-full rounded-md h-12">
                <span className="mr-3">
                  <FiPlus />
                </span>
                Add Material
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>

      <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 rounded-t-lg rounded-0">
        <CardBody>
          <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-3">
            <div className="col-span-2">
              <CSVReader onDrop={handleOnDrop} addRemoveButton config={{ header: true }}
                style={{
                  dropArea: {
                    borderColor: 'green',
                    borderRadius: 6,
                    borderWidth: 1,
                    height: '3em',
                    padding: '0 0.2em',
                  },
                  dropAreaActive: {
                    borderColor: 'green',
                  },
                  dropFile: {
                    width: '100%',
                    display: 'block',
                    height: 'auto',
                    background: 'none',
                    borderRadius: 6,
                    padding: '0.2em 0.2em',
                  },
                  fileSizeInfo: {
                    color: '#fff',
                    backgroundColor: '#000',
                    borderRadius: 0,
                    lineHeight: 1,
                    fontSize: 12,
                    marginBottom: '0.5em',
                    padding: '0.3em 0.2em',
                  },
                  fileNameInfo: {
                    color: '#757575',
                    backgroundColor: 'transparent',
                    borderRadius: 1,
                    fontSize: 14,
                    lineHeight: 1,
                    padding: '0 0.4em',
                  },
                  removeButton: {
                    color: 'red',
                  },
                  progressBar: {
                    backgroundColor: 'green',
                  },
                }}
              >
                <span className="text-sm text-gray-500">Drop CSV file</span>
              </CSVReader>
            </div>
            <div className="flex items-center">
              <Button onClick={handleUploadProducts} layout="outline">
                Upload
              </Button>
              <div className="w-full">
                {loading ? '' : tempData.length != 0 & tempData._id == undefined ?
                  <CSVDownloader data={tempData} filename={'products'}>
                    <Button className="w-full h-12">Download</Button>
                  </CSVDownloader>
                  :
                  null
                }
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      {loading ? (
        <Loading loading={loading} />
      ) : serviceData.length !== 0 ? (
        <TableContainer className="mb-8 rounded-b-lg">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>ID</TableCell>
                <TableCell>Material</TableCell>
                <TableCell>Material Name</TableCell>
                <TableCell>Material Type</TableCell>
                <TableCell>Supplier</TableCell>
                <TableCell>Producer</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Details</TableCell>
                <TableCell className="text-center">Published</TableCell>
                <TableCell className="text-right">Actions</TableCell>
              </tr>
            </TableHeader>
            <MaterialTable materials={dataTable} />
          </Table>
          <TableFooter>
            <Pagination
              totalResults={totalResults}
              resultsPerPage={resultsPerPage}
              onChange={handleChangePage}
              label="Material Page Navigation"
            />
          </TableFooter>
        </TableContainer>
      ) : (
        <NotFound title="Material" />
      )}
    </>
  );
};

export default Materials;

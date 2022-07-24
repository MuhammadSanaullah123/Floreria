import React from 'react';
import { Link } from 'react-router-dom';
import {
  TableCell,
  TableBody,
  TableRow,
  Badge,
  Avatar,
} from '@windmill/react-ui';
import { FiEye } from 'react-icons/fi';

import Tooltip from '../tooltip/Tooltip';
import MainModal from '../modal/MainModal';
import MainDrawer from '../drawer/MainDrawer';
import MaterialDrawer from '../drawer/MaterialDrawer';
import ShowHideButton from '../table/ShowHideButton';
import EditDeleteButton from '../table/EditDeleteButton';
import useToggleDrawer from '../../hooks/useToggleDrawer';

const MaterialTable = ({ materials }) => {
  const { serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();

  return (
    <>
      <MainModal id={serviceId} />
      <MainDrawer>
        <MaterialDrawer id={serviceId} />
      </MainDrawer>
      <TableBody>
        {materials?.map((materials, i) => (
          <TableRow key={i + 1}>
            <TableCell>
              <span className="text-xs uppercase font-semibold">
                {' '}
                {materials._id.substring(18, 26)}
              </span>
            </TableCell>
            <TableCell>
              <span className="text-sm">{materials.material}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm">{materials.materialName}</span>
            </TableCell>
            <TableCell>
              <div className="flex items-center">
                {/* <Avatar
                  className="hidden p-1 mr-2 md:block bg-gray-50 shadow-none"
                  src={materials.image}
                  alt={materials.title}
                /> */}
                <div>
                  <h2 className="text-sm font-medium">{materials.materialType}</h2>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <span className="text-sm">{materials.supplier}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm">{materials.producer}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm font-sm">${materials.price}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm font-sm">{materials.quantity}</span>
            </TableCell>
            <TableCell>
              {materials.quantity > 0 ? (
                <Badge type="success">Selling</Badge>
              ) : (
                <Badge type="danger">Sold Out</Badge>
              )}
            </TableCell>
              
            <TableCell>
              <Link
                to={`/materials/${materials._id}`}
                className="flex justify-center text-center text-gray-400 hover:text-green-600"
              >
                <Tooltip
                  id="details"
                  Icon={FiEye}
                  title="Details"
                  bgColor="#10B981"
                />
              </Link>
            </TableCell>
            <TableCell>
              <ShowHideButton id={materials._id} status={materials.status} />
            </TableCell>
            <TableCell>
              <EditDeleteButton
                id={materials._id}
                handleUpdate={handleUpdate}
                handleModalOpen={handleModalOpen}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default React.memo(MaterialTable);

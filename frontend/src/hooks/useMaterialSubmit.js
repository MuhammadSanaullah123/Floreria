import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SidebarContext } from '../context/SidebarContext';
import MaterialServices from '../services/MaterialServices';
import { notifyError, notifySuccess } from '../utils/toast';

const useMaterialSubmit = (id) => {
  const { isDrawerOpen, closeDrawer, setIsUpdate } = useContext(SidebarContext);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // if (!imageUrl) {
    //   notifyError('Image is required!');
    //   return;
    // }
    // if (data.originalPrice < data.salePrice) {
    //   notifyError('SalePrice must be less then or equal of product price!');
    //   return;
    // }

    const materialData = {
      // category: data.category,
      // productName: data.productName,
      // Status: data.Status,
      // Stock: data.Stock,
      // isRequiredShipping: data.isRequiredShipping,
      // packagingSpecification: data.packagingSpecification,
      // published: data.published,
      // tags: data.tags,
      // variantGrams: data.variantGrams,
      // variantPrice: data.variantPrice,
      // variantTaxable: data.variantTaxable,
      // vendor: data.vendor,
      // productDetails: data.productDetails,
      // images: imageUrl,
      // tag: JSON.stringify(tag),
      material: data.material,
      materialName: data.materialName,
      materialType: data.materialType,
      supplier: data.supplier,
      producer: data.producer,
      published: data.published,
      quantity: data.quantity
    };

    if (id) {
      MaterialServices.updateMaterial(id, materialData)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeDrawer();
    } else {
      MaterialServices.addMaterial(materialData)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeDrawer();
    }
  };

  useEffect(() => {
    if (!isDrawerOpen) {
      setValue('material');
      setValue('materialName');
      setValue('materialType');
      setValue('supplier');
      setValue('producer');
      setValue('quantity');
      setValue('published');
      return;
    }

    if (id) {
      MaterialServices.getMaterialById(id)
        .then((res) => {
          if (res) {
            setValue('material', res.material);
            setValue('materialName', res.materialName);
            setValue('materialType', res.materialType);
            setValue('supplier', res.supplier);
            setValue('producer', res.producer);
            setValue('quantity', res.quantity);
            setValue('published', res.published);
          }
        })
        .catch((err) => {
          notifyError('There is a server error!');
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, setValue, isDrawerOpen]);

  useEffect(() => {
    
  }, []);

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
  };
};

export default useMaterialSubmit;

import {
    getSubCategoryList,
  } from "../index";
  import { api } from '../../../api/api';

  export const subCategoryListApi = () => {
    return async (dispatch) => {
      await api('subCategory/getAllSubCategory', {}, 'get')
        .then((res) => {
          dispatch(getSubCategoryList(res.data.data));
        })
        .catch((error) => {
          console.log(error)
          // toastr.error('Can not able to get lesson list');
        });
    };
  };
  
  export const deleteSubCategoryApi = async (id) => {
    const deleteSubCategory = await api(`subCategory/deleteSubCategory?subCategoryToken=${id}`, {}, 'delete');
    if (deleteSubCategory) {
      return deleteSubCategory;
    }
  };
  export const addSubCategoryApi = async (data) => {
    const createSubCategory = await api(
      "subCategory/addSubCategory",
      data,
      "post"
    );
    if (createSubCategory) {
      return createSubCategory;
    }
  };
  
  export const updateSubCategoryApi = async (data) => {
    const updateSubCategory = await api(
      `subCategory/updateSubCategory`,
      data,
      "put"
    );
    if (updateSubCategory) {
      return updateSubCategory;
    }
  };
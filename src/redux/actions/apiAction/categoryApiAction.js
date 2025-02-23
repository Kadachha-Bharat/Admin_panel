import {
    getCategoryList,
  } from "../index";
  import { api } from '../../../api/api';

  export const categoryListApi = () => {
    return async (dispatch) => {
      await api('category/getAllCategory', {}, 'get')
        .then((res) => {
          dispatch(getCategoryList(res.data.data));
        })
        .catch((error) => {
          console.log(error)
          // toastr.error('Can not able to get Category list');
        });
    };
  };

  export const deleteCategoryApi = async (id) => {
    const deleteCategory = await api(`category/deleteCategory?categoryToken=${id}`, {}, 'delete');
    if (deleteCategory) {
      return deleteCategory;
    }
  };
  export const addCategoryApi = async (data) => {
    const createCategory = await api(
      "category/addCategory",
      data,
      "post"
    );
    if (createCategory) {
      return createCategory;
    }
  };
  
  export const updateCategoryApi = async (data) => {
    const updateCategory = await api(
      `category/updateCategory`,
      data,
      "put"
    );
    if (updateCategory) {
      return updateCategory;
    }
  };
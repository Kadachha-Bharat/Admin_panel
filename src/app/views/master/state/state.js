import React, { Component } from "react";
import { Breadcrumb, SimpleCard } from "../../../../components/matx/index";

import { stateListApi } from "../../../../redux/actions/index";
import { connect } from "react-redux";
import {
  IconButton,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Icon,
  TablePagination
} from "@material-ui/core";


class state extends Component{
  state = {
    stateList: [],
    rowsPerPage : 5,
    page : 0
  };
  componentDidMount = async () => {
    await this.getStateList();
  };
  getStateList = async () => {
    await this.props.stateListApi();
    this.setState({ stateList : this.props.stateList})
  };
     handleChangePage = (event, newPage) => {
      this.setState({ page : newPage})
    };  
     handleChangeRowsPerPage = event => {
       this.setState({ rowsPerPage : event.target.value})
    };
  render(){
    const { page , rowsPerPage , stateList} = this.state;
    return (
      <div className="m-sm-30">
        <div className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "Master", path: "/master/country" },
              { name: "State" },
            ]}
          />
        </div>
        <div className="py-12" />
        <SimpleCard title="State Information">
        <div className="w-100 overflow-auto">
      <Table style={{ whiteSpace: "pre" }}>
        <TableHead>
          <TableRow>
            <TableCell className="px-0">ID</TableCell>
            <TableCell className="px-0">State Name</TableCell>
            <TableCell className="px-0">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stateList
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map
            ((state, index) => (
              <TableRow key={index}>
                <TableCell className="px-0 capitalize" align="left">
                  {index}
                </TableCell>
                <TableCell className="px-0 capitalize" align="left">
                  {state.title}
                </TableCell>
                <TableCell className="px-0">
                  <IconButton>
                    <Icon color="primary">edit</Icon>
                  </IconButton>
                  <IconButton>                   
                    <Icon color="error" onClick={() => console.log('Delete Clicked', state.id)}>delete</Icon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>

      <TablePagination
        className="px-16"
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={stateList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          "aria-label": "Previous Page"
        }}
        nextIconButtonProps={{
          "aria-label": "Next Page"
        }}
        onChangePage={this.handleChangePage}
        onChangeRowsPerPage={this.handleChangeRowsPerPage}
      />
    </div>
        </SimpleCard>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { stateList } = state.state;
  return {
    stateList
  };
};

export default connect(mapStateToProps, { stateListApi })(state);

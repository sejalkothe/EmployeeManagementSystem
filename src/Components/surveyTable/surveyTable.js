import React, { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import FilterAltSharpIcon from "@mui/icons-material/FilterAltSharp";
import Icon from "@mui/material/Icon";
import BasicTable from "../Table/Table";
// import Vectorlogo from '../../assets/Vectorlogo.svg';
import Filter from "../../assets/Vectorfilter.svg";
import table from "../../assets/table.svg";

import idCard from '../../assets/idCard.svg'
import groupAll from '../../assets/GroupAll.svg';
import groupIntern from '../../assets/GroupIntern.svg';
import groupPermanent from '../../assets/GroupPermanent.svg';

import "./surveyTable.css";
import Card from "../Card/card";
import "fontsource-poppins";
// import { useNavigate } from 'react-router-dom';

function SurveyTable() {
  const [count, setCount] = useState(0);

  // const navigate = useNavigate();
  ///////////////////////////////////////////////`

  const [forms, setForms] = useState([]);

  // const navigate = useNavigate();

  // const { email } = useParams()

  // const accessToken = localStorage.getItem(email);
  const getLocalStorage = (label) => {
    return JSON.parse(sessionStorage.getItem(label) || "{}");
  };

  getLocalStorage("userInfo");
  console.log(getLocalStorage("userInfo"));
  const getForms = async () => {
    const querRes = await formApi.get("", {
      params: {
        page: 0,
        size: 10,
        filters: { userID: getLocalStorage("userInfo").userName },
      },
      headers: {
        "x-tenant-id": "63f72b21f9dfbe6751b8875e",
      },
    });
    console.log("query res :", querRes.data.result.data);
    setForms(querRes.data.result.data);
  };

  const counts = forms.reduce(
    (acc, form) => {
      if (form.status === "completed") {
        acc.typeACount++;
      } else if (form.status === "ongoing") {
        acc.typeBCount++;
      } else if (form.status === "draft") {
        acc.typeCCount++;
      }
      return acc;
    },
    { typeACount: 0, typeBCount: 0, typeCCount: 0 }
  );

  async function handleDeleteForm(e, id) {
    console.log(e.target.id);
    const querRes = await formApi.delete(`/${id}`, {
      headers: {
        "x-tenant-id": "63f72b21f9dfbe6751b8875e",
      },
    });
  }
  // console.log("delete form query res :", querRes.data.massage);
  // setTimeout(() => { getForms() }, 1500);

  useEffect(() => {
    getForms();
  }, []);

  /////////////////////////////////////////////////////////////
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  // const surveyCount = createContext();

  const Array = [
    {
      name: "card1",
      count: 100,
      title: "All Employees",
      logo: groupAll,
      
    },
    {
      name: "card2",
      count: 70,
      title: "Permanent",
      logo:groupPermanent,
    },
    {
      name: "card3",
      count: 30,
      title: "Intern",
      logo:  groupIntern,
    },
  ];

  return (
    <div>
      {/* <Navbar /> */}
      {/* <Sidebar /> */}

      {Array.map((arrayName) => {
        return (
          <Card
            className={arrayName.name}
            count={arrayName.count}
            title={arrayName.title}
            logo={arrayName.logo}
          />
        );
      })}

      <div className="SurveyTable">
        <div className="flex-container">
          <div className="Heading1">
            
           <b> Employees </b> <span className="totalCount">100</span>
          </div>
          <Search className="searchBar">
            
            <SearchIconWrapper>
              <SearchIcon style={{ color: "gray" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <button className="plusButton"
              onClick={(e) => {
              e.preventDefault();
              navigate(`/project/63f72b21f9dfbe6751b8875e/edit`);
            }}
          >
            
            <AddSharpIcon style={{ color: "#ffffff", fontSize: "20px",marginTop:'6px', marginLeft:'12px' }} />
            <span style={{ fontSize: "14px", marginLeft:'9px', marginTop:'9px' }}>Add</span>
          </button>

          <button className="filterButton">
            
            <img src={Filter} style={{width:'14.34px', height:'14px', paddingTop:'2.7px'}}  />
          </button>
          <div class="vertical-line"></div>

          <button className="idCardButton">
            <img src={idCard} style={{width:'20px', height:'20px', paddingTop:'2.5px'}} />
          </button>

          <button className="tableButton">
            <img src={table} style={{width:'20px', height:'20px', paddingTop:'2.7px', paddingLeft:'1px'}} />
          </button>
        </div>

        {/* <input className='search' placeholder='       Search by Survay Name' type="text" /> */}
        {/* <FontAwesomeIcon icon={faSearch} className="fa-search"/> */}

        {/* <button  type="button" className="create"  onClick={() => setCount(count + 1)}><FontAwesomeIcon icon={faPlus} className='plus' /></button> */}

        <BasicTable forms={forms} getForms={getForms} />
        {/* <div className='filter' ><FontAwesomeIcon icon={faFilter} className='ficon' /></div> */}
      </div>
    </div>
  );
}

export default SurveyTable;

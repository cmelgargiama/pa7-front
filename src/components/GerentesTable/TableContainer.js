import styled from "styled-components";

export default styled.div`

text-align: -webkit-center;
padding: 2rem;
  table {
    border-spacing: 0;
    border: 1px solid black;
    width: 100rem;
   
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.1rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }

    tfoot {
      tr:first-child {
        td {
          border-top: 2px solid black;
        }
      }
      font-weight: bolder;
    }
  }
`;
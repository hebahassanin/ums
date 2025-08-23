
import { TbCircleCaretLeft } from "react-icons/tb";
import Form from 'react-bootstrap/Form';

type NavbarProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
};

export default function Navbar({ searchTerm, setSearchTerm }:NavbarProps) {
  return (
    <>
    <div className="d-flex justify-content-between align-items-center p-2">
      <div>
        <TbCircleCaretLeft size={24} className="text-secondary" />
      </div>
      <Form.Control 
        size="sm" 
        type="text" 
        placeholder="Search by Name..." 
        value={searchTerm}
        onChange={(e)=> setSearchTerm(e.target.value)} 
        style={{maxWidth:"250px"}}
      />
    </div>
    <hr className="mx-3"/>
    </>
  )
}




import React, { useState } from 'react';
import styled from 'styled-components';
import Pagination from '../components/common/Pagination';
import AssignCategoryModal from '../components/brands/AssignCategoryModal';
import { FiSearch, FiEdit } from 'react-icons/fi';
import kfcLogo from '../assets/images/kfc.png';
import ckLogo from '../assets/images/ck.png';
import mcdonaldsLogo from '../assets/images/mcdonalds.png';
import amazonLogo from '../assets/images/amazon.png';
import zaraLogo from '../assets/images/zara.png';


const brandsData = [
    { id: 1, logo: kfcLogo, name: 'KFC', color: '#874985', assignedCategories: [{id: 1, name: 'Food'}] },
    { id: 2, logo: ckLogo, name: 'Calvin Kelvin', color: '#ffffff', assignedCategories: [{id: 2, name: 'Cloth'}, {id: 3, name: 'Shoes'}] },
    { id: 3, logo: mcdonaldsLogo, name: 'McDonald', color: '#874985', assignedCategories: [{id: 1, name: 'Food'}] },
    { id: 4, logo: amazonLogo, name: 'Amazon', color: '#252525', assignedCategories: [{id: 4, name: 'Electronics'}, {id: 2, name: 'Cloth'}, {id: 3, name: 'Shoes'}, {id: 1, name: 'Food'}] },
    { id: 5, logo: zaraLogo, name: 'Zara', color: '#074D88', assignedCategories: [{id: 5, name: 'Bags'}] },
];


const PageHeader = styled.div`
  margin-bottom: 2rem;
  h1 { font-size: 1.875rem; font-weight: 600; }
`;

const FilterBar = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
`;

const SearchButton = styled.button`
  background: #7c3aed;
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
`;

const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid #e5e7eb;
`;

const TabButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-bottom: 3px solid ${props => props.active ? '#7c3aed' : 'transparent'};
  color: ${props => props.active ? '#7c3aed' : '#6b7280'};
  font-weight: 600;
  background: none;
  cursor: pointer;
  margin-bottom: -1px; /* To overlap with the container's border */
`;

const TableContainer = styled.div`
  background: #fff;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  border: 1px solid #e5e7eb;
  border-top: none;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td { padding: 1rem 1.5rem; text-align: left; }
  thead { background: #f9fafb; }
  th { color: #6b7280; font-weight: 600; text-transform: uppercase; font-size: 0.8rem; }
  tbody tr { border-top: 1px solid #f3f4f6; }
`;

const BrandLogo = styled.img`
    width: 32px;
    height: 32px;
    object-fit: contain;
    border-radius: 4px;
`;

const ColorInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const ColorBox = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background-color: ${props => props.color};
  border: 1px solid #e5e7eb;
`;

const CategoriesWrapper = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
`;

const CategoryTag = styled.span`
  background-color: #f3f4f6;
  color: #4b5563;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ActionButton = styled.button`
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  background-color: #f59e0b; /* Orange for edit */
`;

const TotalBrandsPage = () => {
    const [activeTab, setActiveTab] = useState('Categories');
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedBrand, setSelectedBrand] = useState(null);

    const handleEditClick = (brand) => {
        setSelectedBrand(brand);
        setModalOpen(true);
    };

    return (
        <div>
            <PageHeader><h1>Total Brands</h1></PageHeader>
            
            <FilterBar>
                <SearchInput placeholder="Search by Brand Name" />
                <SearchButton>Search</SearchButton>
            </FilterBar>
            
            <Tabs>
                <TabButton active={activeTab === 'Categories'} onClick={() => setActiveTab('Categories')}>Categories</TabButton>
                <TabButton active={activeTab === 'Uncategories'} onClick={() => setActiveTab('Uncategories')}>Uncategories</TabButton>
            </Tabs>

            <TableContainer>
                <Table>
                    <thead>
                        <tr>
                            <th>Sr. No</th>
                            <th>Image</th>
                            <th>Brands</th>
                            <th>BackgroundColor</th>
                            <th>Assigned Categories</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {brandsData.map((brand, index) => (
                            <tr key={brand.id}>
                                <td>{index + 1}</td>
                                <td><BrandLogo src={brand.logo} alt={brand.name} /></td>
                                <td>{brand.name}</td>
                                <td>
                                    <ColorInfo>
                                        <ColorBox color={brand.color} /> 
                                        {brand.color}
                                    </ColorInfo>
                                </td>
                                <td>
                                    <CategoriesWrapper>
                                        {brand.assignedCategories.map(cat => (
                                            <CategoryTag key={cat.id}>{cat.name}</CategoryTag>
                                        ))}
                                    </CategoriesWrapper>
                                </td>
                                <td>
                                    <ActionButton onClick={() => handleEditClick(brand)}>
                                        <FiEdit />
                                    </ActionButton>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </TableContainer>
            <Pagination totalItems={738} />

            <AssignCategoryModal 
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                brand={selectedBrand}
            />
        </div>
    );
};

export default TotalBrandsPage;
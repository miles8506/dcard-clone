import { memo } from 'react'

import { MainWrapper } from './style'
import Header from './c-cpns/header'
import MainLoadBoard from '@/components/main/main-load-board'
import MainContextProvider from '@/context/main-context'

// import MSModal from '@/base-ui/MSModal'
// import ModalContent from '@/components/header/modal-content'

const Main = memo(() => {
  return (
    <MainWrapper>
      <MainContextProvider>
        <Header></Header>
        <MainLoadBoard />
      </MainContextProvider>
    </MainWrapper>
  )
})

export default Main

// import { memo, useState, SyntheticEvent, MouseEvent } from 'react';
// import { Outlet, useNavigate } from 'react-router-dom';
// import { useSelector, shallowEqual, useDispatch } from 'react-redux';

// import { RootStateType } from '@/store';
// import { addCount } from '@/store/main';

// import { MainWrapper } from './style';

// // test component
// import MSButton from '@/base-ui/MSButton';
// import MSInput from '@/base-ui/MSInput';
// import MSModal from '@/base-ui/MSModal';
// import MSTab from '@/base-ui/MSTab';
// import MSTabs from '@/base-ui/MSTabs';

// import { Menu, MenuItem } from '@mui/material';

// const Main = memo(() => {
//   const navigate = useNavigate();
//   const { count } = useSelector(
//     (state: RootStateType) => ({
//       count: state.main.count
//     }),
//     shallowEqual
//   );
//   const dispatch = useDispatch();
//   const [foo, setFoo] = useState('');
//   const [modalStatus, setModalStatus] = useState(false);
//   const [index, setIndex] = useState(0);
//   const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
//   const isOpen = Boolean(anchorEl);

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleOpen = (event: MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleChange = (event: SyntheticEvent, newValue: number) => {
//     setIndex(newValue);
//     if (newValue === 0) {
//       navigate('/main/all');
//     } else {
//       navigate('/main/curation');
//     }
//   };

//   return (
//     <MainWrapper>
//       <h2>Main</h2>
//       <div>{count}</div>
//       <button onClick={() => dispatch(addCount(10))}>click</button>
//       <MSButton onClick={() => setModalStatus(!modalStatus)}>
//         antd button
//       </MSButton>
//       <MSInput value={foo} setValue={setFoo} />
//       <h2>Foo: {foo}</h2>
//       <MSModal
//         open={modalStatus}
//         onCancel={() => setModalStatus(!modalStatus)}
//       />
//       <MSTabs value={index} onChange={handleChange}>
//         <MSTab label="Item one" id="0"></MSTab>
//         <MSTab label="Item two" id="1"></MSTab>
//       </MSTabs>
//       <Outlet />
//       <MSButton onClick={handleOpen}>open menu</MSButton>
//       <Menu open={isOpen} onClose={handleClose} anchorEl={anchorEl}>
//         <MenuItem onClick={() => setAnchorEl(null)}>All</MenuItem>
//         <MenuItem onClick={() => setAnchorEl(null)}>Curation</MenuItem>
//       </Menu>
//     </MainWrapper>
//   );
// });

// export default Main;

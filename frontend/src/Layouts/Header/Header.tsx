import './Header.scss';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

import SideMenu from '../../Components/menu/SideMenu/SideMenu';
import About from '../../Components/navDropdowns/About';
import Design from '../../Components/navDropdowns/Design';
import Resources from '../../Components/navDropdowns/Resources';

function Header() {
    return (
        <div className='header'>
            <Link to={'/'} className='main-logo'>
                {/* prettier-ignore */}
                <svg className='big-main-logo' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 343.99 25.7'><path d='M0 10.8a8.73 8.73 0 0 1 .91-4 9.35 9.35 0 0 1 2.67-3.12A10.21 10.21 0 0 1 6.4 2.12a8.94 8.94 0 0 1 3-.54 8.84 8.84 0 0 1 3.79.85 9.79 9.79 0 0 1 3.2 2.43 8.65 8.65 0 0 1 1.65 8.91 9 9 0 0 1-1.7 2.76 9.72 9.72 0 0 1-3.25 2.4 9.46 9.46 0 0 1-7.77 0 9.19 9.19 0 0 1-3.14-2.31 8.55 8.55 0 0 1-1.62-2.69A8.94 8.94 0 0 1 0 10.8Zm3.07.19a9.64 9.64 0 0 0 2 6.21 5.78 5.78 0 0 0 1.91 1.65 5.09 5.09 0 0 0 2.33.51 5.24 5.24 0 0 0 2.34-.5 5.93 5.93 0 0 0 1.92-1.66 9.77 9.77 0 0 0 2-6.26 13.61 13.61 0 0 0-.55-3.87 9.35 9.35 0 0 0-1.54-3.09 5 5 0 0 0-1.81-1.52 5.36 5.36 0 0 0-2.35-.48 5.38 5.38 0 0 0-2.33.47 5.27 5.27 0 0 0-1.82 1.53 9 9 0 0 0-1.55 3.09 13.36 13.36 0 0 0-.55 3.92Zm31.07-8.97.21 4.19h-.29a5.21 5.21 0 0 0-.55-1.76A3.82 3.82 0 0 0 31 2.59a10.35 10.35 0 0 0-2.16-.18h-2.9v7.61h.76a7.52 7.52 0 0 0 1.74-.15 1.89 1.89 0 0 0 .95-.55 2.27 2.27 0 0 0 .53-.87 8.17 8.17 0 0 0 .28-1.47h.29l-.05 6.8h-.29a7 7 0 0 0-.37-1.55 2.89 2.89 0 0 0-.61-1 2.24 2.24 0 0 0-1-.59 5.2 5.2 0 0 0-1.55-.19h-.72v2.9c0 1.16 0 2 .08 2.54a4.15 4.15 0 0 0 .35 1.32 2.67 2.67 0 0 0 1.31 1.34 5.33 5.33 0 0 0 2.33.43 7.2 7.2 0 0 0 2.55-.39 3.82 3.82 0 0 0 1.68-1.2 4.8 4.8 0 0 0 .74-1.24 11.1 11.1 0 0 0 .53-1.84h.31l-.17 5.05H20.49v-.29a4.28 4.28 0 0 0 1.17-.2 2.14 2.14 0 0 0 .81-.54 2.17 2.17 0 0 0 .54-1 9 9 0 0 0 .15-1.93V6.01a9 9 0 0 0-.15-1.93 2.22 2.22 0 0 0-.54-1 2 2 0 0 0-.79-.53 4.32 4.32 0 0 0-1.19-.21v-.32Zm9.4.4h-1.71a9.29 9.29 0 0 0-2.91.49 3.39 3.39 0 0 0-1.58 1.36 6.8 6.8 0 0 0-.88 2.41h-.29l.23-4.69h17.17l.21 4.69h-.29a6.22 6.22 0 0 0-1.07-2.67 4 4 0 0 0-2.13-1.3 16.11 16.11 0 0 0-4-.34v12.99a9 9 0 0 0 .15 1.93 2 2 0 0 0 .54 1 2 2 0 0 0 .8.54 4.29 4.29 0 0 0 1.18.2v.29h-8.1v-.29a4.3 4.3 0 0 0 1.19-.2 2.14 2.14 0 0 0 .81-.54 2.17 2.17 0 0 0 .54-1 9.79 9.79 0 0 0 .14-1.93ZM64.9 0h1.45v25.68H64.9Zm13.63 10.8a8.73 8.73 0 0 1 .92-4 9.44 9.44 0 0 1 2.66-3.12 10.5 10.5 0 0 1 2.82-1.54 9 9 0 0 1 3-.54 8.83 8.83 0 0 1 3.85.83 9.68 9.68 0 0 1 3.2 2.43 8.58 8.58 0 0 1 1.65 8.91 8.81 8.81 0 0 1-1.7 2.76 9.58 9.58 0 0 1-3.24 2.4 9.48 9.48 0 0 1-7.78 0 9.15 9.15 0 0 1-3.17-2.34 8.55 8.55 0 0 1-1.62-2.69 8.72 8.72 0 0 1-.59-3.1Zm3.08.19a9.7 9.7 0 0 0 2 6.21 5.88 5.88 0 0 0 1.91 1.65 5.12 5.12 0 0 0 2.33.51 5.31 5.31 0 0 0 2.35-.5 5.93 5.93 0 0 0 1.92-1.66 9.76 9.76 0 0 0 2-6.26 13.26 13.26 0 0 0-.55-3.87 9.34 9.34 0 0 0-1.55-3.09 5.12 5.12 0 0 0-1.81-1.52 5.18 5.18 0 0 0-6.51 1.52 9.15 9.15 0 0 0-1.55 3.09 13.71 13.71 0 0 0-.54 3.92Zm21.02 7.29v3.21a6.2 6.2 0 0 0 .1 1.26 1.39 1.39 0 0 0 .4.68 2.5 2.5 0 0 0 1.31.5v.27h-5.62v-.27a3.24 3.24 0 0 0 1.1-.28 1.23 1.23 0 0 0 .53-.62 2.87 2.87 0 0 0 .2-.88c0-.4.05-1 .05-1.7v-8.77a3.52 3.52 0 0 0-.45-2 1.74 1.74 0 0 0-1.51-.61v-.39l3.7-.52a4.69 4.69 0 0 1 .14 1.12v.24a7.41 7.41 0 0 1 1.76-.91 5.74 5.74 0 0 1 1.79-.27 4.8 4.8 0 0 1 4.63 3 6.16 6.16 0 0 1 .47 2.43 6.67 6.67 0 0 1-.5 2.58 5.16 5.16 0 0 1-4.86 3.2 4.32 4.32 0 0 1-1.65-.28 6.58 6.58 0 0 1-1.59-.99Zm0-4.21a17.12 17.12 0 0 0 .15 2.61 3.27 3.27 0 0 0 .55 1.43 2.46 2.46 0 0 0 .93.78 2.59 2.59 0 0 0 1.16.29 2.9 2.9 0 0 0 2.36-1.24 5.5 5.5 0 0 0 .94-1.8 7.13 7.13 0 0 0 .33-2.17 7.39 7.39 0 0 0-.31-2.14 5.8 5.8 0 0 0-.87-1.8 2.79 2.79 0 0 0-2.31-1.29 2.59 2.59 0 0 0-1.27.33 2.54 2.54 0 0 0-.94.9 3.85 3.85 0 0 0-.55 1.52 16.77 16.77 0 0 0-.17 2.58Zm12.43-1.63v.91a7.46 7.46 0 0 0 .32 2.15 5.37 5.37 0 0 0 .88 1.76 4.14 4.14 0 0 0 3.18 1.52 3.73 3.73 0 0 0 1.29-.23 2.76 2.76 0 0 0 1-.63 3.63 3.63 0 0 0 .79-1.43l.26.09a3.54 3.54 0 0 1-1.41 2.24 4.94 4.94 0 0 1-2.89.76 6.57 6.57 0 0 1-2.68-.5 4.7 4.7 0 0 1-1.89-1.52 5.7 5.7 0 0 1-1.13-3.53 5.41 5.41 0 0 1 2-4.48 5.28 5.28 0 0 1 3.39-1.18 4.81 4.81 0 0 1 1.88.36 3.85 3.85 0 0 1 1.46 1 3.9 3.9 0 0 1 .93 2.66Zm5.53-.49a4.91 4.91 0 0 0-.46-2 2.68 2.68 0 0 0-.91-1 2.25 2.25 0 0 0-1.22-.36 2.44 2.44 0 0 0-1.9.94 4.24 4.24 0 0 0-1 2.36Zm7.11-3.58a5.82 5.82 0 0 1 .18 1.38v.2a5.13 5.13 0 0 1 3.75-1.58 4.15 4.15 0 0 1 2.61.76 2.53 2.53 0 0 1 1 2.13v5.42a5.54 5.54 0 0 0 .1 1.26 1.34 1.34 0 0 0 .39.66 2.57 2.57 0 0 0 1.31.52v.27h-5.61v-.31a3.16 3.16 0 0 0 1.09-.28 1.32 1.32 0 0 0 .54-.63 2.91 2.91 0 0 0 .19-.88c0-.39.06-1 .06-1.69v-2.69a14.19 14.19 0 0 0-.1-2 2.4 2.4 0 0 0-.36-1 1.9 1.9 0 0 0-.83-.69 3 3 0 0 0-1.21-.25 3.25 3.25 0 0 0-1.32.28 2.48 2.48 0 0 0-1 .76 2.77 2.77 0 0 0-.5 1.15 13 13 0 0 0-.12 2.12v3.4a5.42 5.42 0 0 0 .11 1.26 1.21 1.21 0 0 0 .39.66 2.53 2.53 0 0 0 1.31.52v.27h-5.61v-.31a3.23 3.23 0 0 0 1.09-.28 1.3 1.3 0 0 0 .53-.63 2.79 2.79 0 0 0 .2-.87c0-.39.05-1 .05-1.7v-3.12q0-1.31-.06-1.83a1.86 1.86 0 0 0-.28-.85 1.27 1.27 0 0 0-.52-.51 2.24 2.24 0 0 0-.88-.2v-.26Zm30.35-6.35.21 4.19h-.29a5.21 5.21 0 0 0-.55-1.76 3.82 3.82 0 0 0-2.51-1.86 10.35 10.35 0 0 0-2.13-.17h-2.91v7.61h.77a7.36 7.36 0 0 0 1.73-.15 1.92 1.92 0 0 0 1-.55 2.25 2.25 0 0 0 .52-.87 7.24 7.24 0 0 0 .29-1.47h.29l-.05 6.8h-.29a7 7 0 0 0-.34-1.57 3 3 0 0 0-.61-1 2.24 2.24 0 0 0-1-.59 5.24 5.24 0 0 0-1.55-.19h-.73v2.9a25.29 25.29 0 0 0 .09 2.54 4.15 4.15 0 0 0 .35 1.32 2.67 2.67 0 0 0 1.31 1.34 5.3 5.3 0 0 0 2.33.43 7.24 7.24 0 0 0 2.55-.39 3.82 3.82 0 0 0 1.68-1.2 4.8 4.8 0 0 0 .74-1.24 11.1 11.1 0 0 0 .53-1.84h.29l-.17 5.05h-15.2v-.29a4.28 4.28 0 0 0 1.17-.2 2.14 2.14 0 0 0 .81-.54 2.17 2.17 0 0 0 .54-1 9.93 9.93 0 0 0 .14-1.93V6.01a9.93 9.93 0 0 0-.14-1.93 2.22 2.22 0 0 0-.54-1 2 2 0 0 0-.8-.53 4.24 4.24 0 0 0-1.18-.21v-.32Zm5.88 6.35a5.82 5.82 0 0 1 .18 1.38v.2a5.13 5.13 0 0 1 3.75-1.58 4.15 4.15 0 0 1 2.61.76 2.51 2.51 0 0 1 1 2.13v5.42a6.2 6.2 0 0 0 .1 1.26 1.29 1.29 0 0 0 .4.66 2.49 2.49 0 0 0 1.3.52v.27h-5.61v-.31a3.16 3.16 0 0 0 1.09-.28 1.32 1.32 0 0 0 .54-.63 2.64 2.64 0 0 0 .19-.88c0-.39.06-1 .06-1.69v-2.69a16.33 16.33 0 0 0-.09-2 2.7 2.7 0 0 0-.36-1 2 2 0 0 0-.84-.69 2.93 2.93 0 0 0-1.2-.25 3.27 3.27 0 0 0-1.33.28 2.48 2.48 0 0 0-1 .76 2.77 2.77 0 0 0-.5 1.15 13 13 0 0 0-.12 2.12v3.34a5.54 5.54 0 0 0 .1 1.26 1.34 1.34 0 0 0 .39.66 2.53 2.53 0 0 0 1.31.52v.27h-5.61v-.25a3.16 3.16 0 0 0 1.09-.28 1.25 1.25 0 0 0 .53-.63 2.53 2.53 0 0 0 .2-.87c0-.39.06-1 .06-1.7v-3.12a15.3 15.3 0 0 0-.07-1.83 1.86 1.86 0 0 0-.28-.85 1.21 1.21 0 0 0-.52-.51 2.23 2.23 0 0 0-.87-.2v-.26Zm13.09 12.06-.22.06a1.54 1.54 0 0 0-.44-.49 1 1 0 0 0-.53-.14 1.09 1.09 0 0 0-.87.4 1.66 1.66 0 0 0-.33 1.06 2 2 0 0 0 1 1.69 4.82 4.82 0 0 0 2.63.66 4.76 4.76 0 0 0 2.75-.73 2.23 2.23 0 0 0 1.05-1.9 1.67 1.67 0 0 0-.7-1.44 3.35 3.35 0 0 0-2-.5h-2a3.22 3.22 0 0 1-2-.59 1.82 1.82 0 0 1-.79-1.46 1.61 1.61 0 0 1 .84-1.43 6.92 6.92 0 0 1 1.58-.55 4.34 4.34 0 0 1-1.72-1.33 3.1 3.1 0 0 1-.61-1.84 3.21 3.21 0 0 1 1-2.28 4 4 0 0 1 1.32-.92 3.9 3.9 0 0 1 1.56-.33 4.48 4.48 0 0 1 2.49.86 4.94 4.94 0 0 1 1.07-.66 2.57 2.57 0 0 1 1-.2 1.72 1.72 0 0 1 1 .27 1 1 0 0 1 .46.81.71.71 0 0 1-.18.49.58.58 0 0 1-.45.19 1 1 0 0 1-.75-.43l-.29-.38a.83.83 0 0 0-.68-.3 1.5 1.5 0 0 0-1 .47 4 4 0 0 1 1 2.59 3 3 0 0 1-1.43 2.6 4.25 4.25 0 0 1-1.59.65c-.17 0-.71.07-1.62.13-1.24.08-1.86.42-1.86 1s.53.81 1.59.81h2.09a7.64 7.64 0 0 1 1.87.2 4 4 0 0 1 1.34.61 2.76 2.76 0 0 1 1.18 2.39 3 3 0 0 1-1.3 2.58 6.73 6.73 0 0 1-3.91.95 5.59 5.59 0 0 1-3.93-1.12 2.42 2.42 0 0 1-.74-1.8 2 2 0 0 1 .55-1.44 1.71 1.71 0 0 1 1.33-.59 1.29 1.29 0 0 1 .93.34 1.19 1.19 0 0 1 .36.9Zm-.54-8.44a3.94 3.94 0 0 0 .57 2.23 1.73 1.73 0 0 0 1.48.87 1.58 1.58 0 0 0 1.42-.86 4.76 4.76 0 0 0 .5-2.38 4.25 4.25 0 0 0-.66-2.5 1.44 1.44 0 0 0-1.24-.7 1.66 1.66 0 0 0-1.46.91 4 4 0 0 0-.45 1.12 5.34 5.34 0 0 0-.16 1.31Zm8.21-10.02 3.66-.46v15.17a6.2 6.2 0 0 0 .1 1.26 1.29 1.29 0 0 0 .4.66 2.49 2.49 0 0 0 1.3.52v.27h-5.61v-.31a3.16 3.16 0 0 0 1.09-.28 1.32 1.32 0 0 0 .54-.63 2.64 2.64 0 0 0 .19-.88c0-.39.06-1 .06-1.7V5.68c0-.86 0-1.47-.06-1.82a2 2 0 0 0-.28-.86 1.27 1.27 0 0 0-.52-.51 2.51 2.51 0 0 0-.88-.19Zm6.3 6.86 3.66-.46v8.31a5.43 5.43 0 0 0 .1 1.26 1.37 1.37 0 0 0 .39.67 2.67 2.67 0 0 0 1.31.51v.27h-5.61v-.31a3.16 3.16 0 0 0 1.09-.28 1.25 1.25 0 0 0 .53-.63 2.53 2.53 0 0 0 .2-.87c0-.39.06-1 .06-1.7v-3.12q0-1.31-.06-1.83a2.13 2.13 0 0 0-.28-.85 1.33 1.33 0 0 0-.52-.51 2.33 2.33 0 0 0-.88-.2Zm2.65-5a1.11 1.11 0 0 1-.83-.32 1.13 1.13 0 0 1 0-1.59 1.2 1.2 0 0 1 1.63 0 1.08 1.08 0 0 1 .34.76 1 1 0 0 1-.33.8 1.1 1.1 0 0 1-.81.33Zm4.38 15.52v-3.59h.21a7.09 7.09 0 0 0 .88 2.11 2.77 2.77 0 0 0 2.28 1.43 2.11 2.11 0 0 0 1.38-.48 1.88 1.88 0 0 0 .64-1.51 2.26 2.26 0 0 0-.46-1.4 2.77 2.77 0 0 0-.64-.58 13.52 13.52 0 0 0-1.3-.75 9.15 9.15 0 0 1-2.13-1.42 2.72 2.72 0 0 1-.76-1.88 2.79 2.79 0 0 1 .77-2 3 3 0 0 1 2.32-.94 3.26 3.26 0 0 1 1.21.23l.43.19a1 1 0 0 0 .35.07c.16 0 .32-.12.46-.38h.25l.14 2.89h-.27a7 7 0 0 0-.3-1 3 3 0 0 0-.45-.71 3 3 0 0 0-.91-.76 2.23 2.23 0 0 0-1-.27 1.65 1.65 0 0 0-1.21.51 1.78 1.78 0 0 0-.5 1.27 1.63 1.63 0 0 0 .45 1.12 4.24 4.24 0 0 0 1.39.92l1.34.61a4.39 4.39 0 0 1 1.8 1.36 3.13 3.13 0 0 1 .6 1.91 3 3 0 0 1-.87 2.21 3.37 3.37 0 0 1-2.54 1 4.79 4.79 0 0 1-1.7-.33l-.67-.25a1.17 1.17 0 0 0-.29 0 .73.73 0 0 0-.67.38Zm12.11-17.84v8.7a7.71 7.71 0 0 1 .79-.85 3.38 3.38 0 0 1 .83-.53 4.6 4.6 0 0 1 2.1-.46 4.67 4.67 0 0 1 2.48.6 2.36 2.36 0 0 1 1 1.08 5.48 5.48 0 0 1 .26 1.92v4.71a5.54 5.54 0 0 0 .1 1.26 1.29 1.29 0 0 0 .4.66 2.49 2.49 0 0 0 1.3.52v.27h-5.61v-.31a3.68 3.68 0 0 0 1-.21 1.48 1.48 0 0 0 .52-.43 2.06 2.06 0 0 0 .31-.86 10.73 10.73 0 0 0 .09-1.61v-4a6.15 6.15 0 0 0-.14-1.45 2.41 2.41 0 0 0-.47-.93 2.3 2.3 0 0 0-1.82-.74c-2 0-3.07 1.61-3.07 4.84v2.94a5.54 5.54 0 0 0 .1 1.26 1.34 1.34 0 0 0 .39.66 2.53 2.53 0 0 0 1.31.52v.27h-5.61v-.26a3.16 3.16 0 0 0 1.09-.28 1.25 1.25 0 0 0 .53-.63 2.6 2.6 0 0 0 .2-.88c0-.39.06-1 .06-1.7V5.68a15.22 15.22 0 0 0-.07-1.82 1.86 1.86 0 0 0-.28-.86 1.21 1.21 0 0 0-.52-.51 2.45 2.45 0 0 0-.87-.19v-.33Zm23.46.91h-1.71a9.29 9.29 0 0 0-2.91.49 3.39 3.39 0 0 0-1.58 1.36 7 7 0 0 0-.88 2.41h-.29l.23-4.69h17.17l.23 4.69h-.29a6.22 6.22 0 0 0-1.07-2.67 4 4 0 0 0-2.13-1.3 16.11 16.11 0 0 0-4-.34v12.99a9 9 0 0 0 .15 1.93 2.17 2.17 0 0 0 .54 1 2 2 0 0 0 .8.54 4.36 4.36 0 0 0 1.18.2v.29h-8.11v-.29a4.29 4.29 0 0 0 1.18-.2 2.14 2.14 0 0 0 .81-.54 2.17 2.17 0 0 0 .54-1 9.06 9.06 0 0 0 .14-1.93Zm14.35 7.9a3.77 3.77 0 0 1 1-1.2 4 4 0 0 1 2.4-.75 1.88 1.88 0 0 1 1.26.37 1 1 0 0 1 .39.81.75.75 0 0 1-.24.58.81.81 0 0 1-.6.23 1 1 0 0 1-.75-.35l-.39-.43a1.48 1.48 0 0 0-1.11-.5c-.57 0-1 .37-1.34 1.12a8.05 8.05 0 0 0-.48 3.1v3.38a5.54 5.54 0 0 0 .1 1.26 1.34 1.34 0 0 0 .39.66 2.57 2.57 0 0 0 1.31.52v.27h-5.61v-.31a3.16 3.16 0 0 0 1.09-.28 1.25 1.25 0 0 0 .53-.63 2.53 2.53 0 0 0 .2-.87c0-.39.06-1 .06-1.7v-3.12q0-1.31-.06-1.83a2.13 2.13 0 0 0-.28-.85 1.33 1.33 0 0 0-.52-.51 2.33 2.33 0 0 0-.88-.2v-.26l3.27-.46a10.26 10.26 0 0 1 .26 1.95Zm16.28 7.8.21.13a2 2 0 0 1-2.09 1.33 2.49 2.49 0 0 1-1.5-.44 3.38 3.38 0 0 1-.82-1 7.73 7.73 0 0 1-1.28 1 3.84 3.84 0 0 1-1.92.46 3.4 3.4 0 0 1-2.22-.67 2.23 2.23 0 0 1-.82-1.82 2.45 2.45 0 0 1 .67-1.76 2.85 2.85 0 0 1 .88-.63 8.08 8.08 0 0 1 1.43-.48 16.67 16.67 0 0 0 1.64-.47 3.45 3.45 0 0 0 .88-.45 1.65 1.65 0 0 0 .56-.69 3.17 3.17 0 0 0 .15-1.09 3.42 3.42 0 0 0-.56-2.17 1.94 1.94 0 0 0-.65-.51 1.91 1.91 0 0 0-.84-.19 1.63 1.63 0 0 0-.92.27 1.57 1.57 0 0 0-.61.73l-.32.74a.9.9 0 0 1-.91.59 1 1 0 0 1-.73-.28 1 1 0 0 1-.29-.72c0-.43.31-.79.92-1.09a5.36 5.36 0 0 1 1.22-.37 7.17 7.17 0 0 1 1.43-.15 7.28 7.28 0 0 1 1.64.2 5.89 5.89 0 0 1 1.43.52 2.05 2.05 0 0 1 1 1.22 5.51 5.51 0 0 1 .1 1.28v4.7a8.34 8.34 0 0 0 .1 1.63 1 1 0 0 0 1 .9 1.19 1.19 0 0 0 .62-.14 2.42 2.42 0 0 0 .6-.58Zm-4.21-5a8.33 8.33 0 0 1-1.5 1 13 13 0 0 0-1.28.75 3.39 3.39 0 0 0-.65.61 2.67 2.67 0 0 0-.59 1.71 2.08 2.08 0 0 0 .46 1.39 1.48 1.48 0 0 0 1.17.54 2 2 0 0 0 1.17-.38 2.37 2.37 0 0 0 .83-1 6.12 6.12 0 0 0 .39-2.46Z' />
                    <path d='M268.06 8.37a5.82 5.82 0 0 1 .18 1.38v.2a5.13 5.13 0 0 1 3.75-1.58 4.15 4.15 0 0 1 2.61.76 2.53 2.53 0 0 1 1 2.13v5.42a5.54 5.54 0 0 0 .1 1.26 1.34 1.34 0 0 0 .39.66 2.57 2.57 0 0 0 1.31.52v.27h-5.62v-.31a3.16 3.16 0 0 0 1.09-.28 1.25 1.25 0 0 0 .53-.63 2.6 2.6 0 0 0 .2-.88c0-.39.06-1 .06-1.69v-2.69a14.19 14.19 0 0 0-.1-2 2.4 2.4 0 0 0-.36-1 1.9 1.9 0 0 0-.83-.69 3 3 0 0 0-1.21-.25 3.25 3.25 0 0 0-1.32.28 2.48 2.48 0 0 0-1 .76 2.77 2.77 0 0 0-.5 1.15 13 13 0 0 0-.12 2.12v3.4a6.2 6.2 0 0 0 .1 1.26 1.29 1.29 0 0 0 .4.66 2.53 2.53 0 0 0 1.31.52v.27h-5.62v-.31a3.24 3.24 0 0 0 1.1-.28 1.3 1.3 0 0 0 .53-.63 2.79 2.79 0 0 0 .2-.87c0-.39.05-1 .05-1.7v-3.12q0-1.31-.06-1.83a2 2 0 0 0-.28-.85 1.27 1.27 0 0 0-.52-.51 2.24 2.24 0 0 0-.88-.2v-.26Zm10.79 10.98v-3.59h.21a7.09 7.09 0 0 0 .88 2.11 2.77 2.77 0 0 0 2.28 1.43 2.09 2.09 0 0 0 1.38-.48 1.85 1.85 0 0 0 .64-1.51 2.26 2.26 0 0 0-.46-1.4 2.77 2.77 0 0 0-.64-.58 13.52 13.52 0 0 0-1.3-.75 8.81 8.81 0 0 1-2.12-1.42 2.67 2.67 0 0 1-.76-1.88 2.78 2.78 0 0 1 .76-2 3 3 0 0 1 2.32-.94 3.26 3.26 0 0 1 1.21.23l.43.19a1 1 0 0 0 .35.07c.16 0 .32-.12.46-.38h.29l.14 2.89h-.26a5.83 5.83 0 0 0-.3-1 3 3 0 0 0-.45-.71 3 3 0 0 0-.91-.76 2.23 2.23 0 0 0-1-.27 1.65 1.65 0 0 0-1.21.51 1.78 1.78 0 0 0-.5 1.27 1.63 1.63 0 0 0 .45 1.12 4.24 4.24 0 0 0 1.39.92l1.34.61a4.33 4.33 0 0 1 1.8 1.36 3.13 3.13 0 0 1 .6 1.91 3 3 0 0 1-.87 2.21 3.37 3.37 0 0 1-2.53 1 4.8 4.8 0 0 1-1.71-.33l-.67-.25a1.12 1.12 0 0 0-.29 0 .73.73 0 0 0-.67.38Zm8.46-17.38 3.66-.46v15.17a5.54 5.54 0 0 0 .1 1.26 1.34 1.34 0 0 0 .39.66 2.57 2.57 0 0 0 1.31.52v.27h-5.61v-.31a3.16 3.16 0 0 0 1.09-.28 1.25 1.25 0 0 0 .53-.63 2.6 2.6 0 0 0 .2-.88c0-.39.06-1 .06-1.7V5.68a15.22 15.22 0 0 0-.07-1.82 2 2 0 0 0-.27-.86 1.29 1.29 0 0 0-.53-.51 2.45 2.45 0 0 0-.87-.19Zm17.02 16.15.22.13a2 2 0 0 1-2.1 1.33 2.49 2.49 0 0 1-1.5-.44 3.54 3.54 0 0 1-.81-1 8.68 8.68 0 0 1-1.28 1 3.87 3.87 0 0 1-1.92.46 3.36 3.36 0 0 1-2.22-.67 2.23 2.23 0 0 1-.82-1.82 2.45 2.45 0 0 1 .67-1.76 2.74 2.74 0 0 1 .88-.63 7.8 7.8 0 0 1 1.43-.48 15.53 15.53 0 0 0 1.63-.47 3.29 3.29 0 0 0 .88-.45 1.51 1.51 0 0 0 .56-.69 3.14 3.14 0 0 0 .16-1.09 3.42 3.42 0 0 0-.56-2.17 1.89 1.89 0 0 0-.66-.51 1.84 1.84 0 0 0-.83-.19 1.66 1.66 0 0 0-.93.27 1.55 1.55 0 0 0-.6.73l-.32.74a.92.92 0 0 1-.92.59 1 1 0 0 1-.72-.28 1 1 0 0 1-.29-.72c0-.43.3-.79.91-1.09a5.3 5.3 0 0 1 1.23-.37 7.17 7.17 0 0 1 1.43-.15 7.34 7.34 0 0 1 1.64.2 6.06 6.06 0 0 1 1.43.52 2.05 2.05 0 0 1 1 1.22 6.14 6.14 0 0 1 .1 1.28v4.7a8.34 8.34 0 0 0 .1 1.63 1 1 0 0 0 1 .9 1.21 1.21 0 0 0 .66-.16 2.42 2.42 0 0 0 .55-.56Zm-4.2-5a8.7 8.7 0 0 1-1.5 1 11.87 11.87 0 0 0-1.28.75 3.39 3.39 0 0 0-.65.61 2.62 2.62 0 0 0-.59 1.71 2.08 2.08 0 0 0 .46 1.39 1.48 1.48 0 0 0 1.17.54 2.06 2.06 0 0 0 1.17-.38 2.44 2.44 0 0 0 .83-1 6.12 6.12 0 0 0 .39-2.46Zm7.72-4.56h3.22v.48h-3.22v7.39a3.08 3.08 0 0 0 .46 1.91 1.63 1.63 0 0 0 .63.49 2 2 0 0 0 .85.18 1.76 1.76 0 0 0 .95-.24 3.19 3.19 0 0 0 .83-.85l.19.16a2.61 2.61 0 0 1-1.17 1.13 4.27 4.27 0 0 1-1.89.37 3.36 3.36 0 0 1-2.18-.58 1.46 1.46 0 0 1-.49-.73 7.41 7.41 0 0 1-.11-1.53v-7.7h-1.36v-.2a3.61 3.61 0 0 0 1.53-1 4.91 4.91 0 0 0 .69-.96 6.43 6.43 0 0 0 .49-1.2l.13-.42h.47Z' />
                    <path d='m311.44 8.83 3.66-.46v8.31a6.06 6.06 0 0 0 .1 1.26 1.32 1.32 0 0 0 .4.67 2.58 2.58 0 0 0 1.3.51v.27h-5.61v-.31a3.16 3.16 0 0 0 1.09-.28 1.32 1.32 0 0 0 .54-.63 2.57 2.57 0 0 0 .19-.87c0-.39.06-1 .06-1.7v-3.12q0-1.31-.06-1.83a2 2 0 0 0-.28-.85 1.27 1.27 0 0 0-.52-.51 2.29 2.29 0 0 0-.88-.2Zm2.65-5a1.08 1.08 0 0 1-.82-.32 1 1 0 0 1-.33-.8 1.07 1.07 0 0 1 .33-.79 1.21 1.21 0 0 1 1.64 0 1.07 1.07 0 0 1 .33.79 1 1 0 0 1-.33.8 1.08 1.08 0 0 1-.82.3Zm3.94 10.16a5.23 5.23 0 0 1 1.52-3.67 5.93 5.93 0 0 1 4.44-2 5.85 5.85 0 0 1 4.41 2 5.22 5.22 0 0 1 .08 7.3 6.15 6.15 0 0 1-9 0 5.31 5.31 0 0 1-1.07-1.7 5.14 5.14 0 0 1-.38-1.93Zm2.31-.14a6.75 6.75 0 0 0 1 3.74 3.24 3.24 0 0 0 2.73 1.71 2.61 2.61 0 0 0 1.33-.38 3.35 3.35 0 0 0 1.12-1.07 5.76 5.76 0 0 0 .8-1.78 7.64 7.64 0 0 0 .31-2.07 7.07 7.07 0 0 0-.33-2.1 6 6 0 0 0-.87-1.82 3.07 3.07 0 0 0-2.56-1.4 3 3 0 0 0-2.47 1.51 6.21 6.21 0 0 0-1.06 3.66Zm14.33-5.48a5.82 5.82 0 0 1 .18 1.38v.2a5.13 5.13 0 0 1 3.75-1.58 4.15 4.15 0 0 1 2.61.76 2.53 2.53 0 0 1 1 2.13v5.42a5.54 5.54 0 0 0 .1 1.26 1.29 1.29 0 0 0 .4.66 2.49 2.49 0 0 0 1.3.52v.27h-5.63v-.31a3.16 3.16 0 0 0 1.09-.28 1.32 1.32 0 0 0 .54-.63 2.64 2.64 0 0 0 .19-.88c0-.39.06-1 .06-1.69v-2.69a16.33 16.33 0 0 0-.09-2 2.54 2.54 0 0 0-.37-1 1.9 1.9 0 0 0-.83-.69 3 3 0 0 0-1.2-.25 3.27 3.27 0 0 0-1.33.28 2.48 2.48 0 0 0-1 .76 2.77 2.77 0 0 0-.5 1.15 13 13 0 0 0-.12 2.12v3.34a5.54 5.54 0 0 0 .1 1.26 1.27 1.27 0 0 0 .39.66 2.53 2.53 0 0 0 1.31.52v.27h-5.61v-.25a3.23 3.23 0 0 0 1.09-.28 1.25 1.25 0 0 0 .53-.63 2.53 2.53 0 0 0 .2-.87c0-.39.06-1 .06-1.7v-3.12a17.85 17.85 0 0 0-.07-1.83 1.86 1.86 0 0 0-.28-.85 1.21 1.21 0 0 0-.52-.51 2.23 2.23 0 0 0-.87-.2v-.26Z' />
                </svg>
                {/* prettier-ignore */}
                <svg className='small-main-logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.8 18.21"><path d="M1.22,13.12a8.73,8.73,0,0,1,.91-4A9.35,9.35,0,0,1,4.8,6,10.21,10.21,0,0,1,7.62,4.44a8.94,8.94,0,0,1,3-.54,8.84,8.84,0,0,1,3.79.85,9.79,9.79,0,0,1,3.2,2.43,8.65,8.65,0,0,1,1.65,8.91,9,9,0,0,1-1.7,2.76,9.72,9.72,0,0,1-3.25,2.4,9.46,9.46,0,0,1-7.77,0A9.19,9.19,0,0,1,3.4,18.94a8.55,8.55,0,0,1-1.62-2.69A8.94,8.94,0,0,1,1.22,13.12Zm3.07.19a9.64,9.64,0,0,0,2,6.21,5.78,5.78,0,0,0,1.91,1.65,5.09,5.09,0,0,0,2.33.51,5.24,5.24,0,0,0,2.34-.5,5.93,5.93,0,0,0,1.92-1.66,9.77,9.77,0,0,0,2-6.26,13.61,13.61,0,0,0-.55-3.87A9.35,9.35,0,0,0,14.7,6.3a5,5,0,0,0-1.81-1.52,5.36,5.36,0,0,0-2.35-.48,5.38,5.38,0,0,0-2.33.47A5.27,5.27,0,0,0,6.39,6.3,9,9,0,0,0,4.84,9.39,13.36,13.36,0,0,0,4.29,13.31Z" transform="translate(-1.22 -3.9)"/><path d="M35.36,4.34l.21,4.19h-.29a5.21,5.21,0,0,0-.55-1.76,3.82,3.82,0,0,0-2.51-1.86,10.35,10.35,0,0,0-2.16-.18h-2.9v7.61h.76a7.52,7.52,0,0,0,1.74-.15,1.89,1.89,0,0,0,.95-.55,2.27,2.27,0,0,0,.53-.87,8.17,8.17,0,0,0,.28-1.47h.29l-.05,6.8h-.29A7,7,0,0,0,31,14.55a2.89,2.89,0,0,0-.61-1,2.24,2.24,0,0,0-1-.59,5.2,5.2,0,0,0-1.55-.19h-.72v2.9c0,1.16,0,2,.08,2.54a4.15,4.15,0,0,0,.35,1.32,2.67,2.67,0,0,0,1.31,1.34,5.33,5.33,0,0,0,2.33.43,7.2,7.2,0,0,0,2.55-.39,3.82,3.82,0,0,0,1.68-1.2,4.8,4.8,0,0,0,.74-1.24,11.1,11.1,0,0,0,.53-1.84H37l-.17,5.05H21.71v-.29a4.28,4.28,0,0,0,1.17-.2,2.14,2.14,0,0,0,.81-.54,2.17,2.17,0,0,0,.54-1,9,9,0,0,0,.15-1.93V8.33a9,9,0,0,0-.15-1.93,2.22,2.22,0,0,0-.54-1,2,2,0,0,0-.79-.53,4.32,4.32,0,0,0-1.19-.21V4.34Z" transform="translate(-1.22 -3.9)"/><path d="M44.76,4.74c-.53,0-1.1,0-1.71,0a9.29,9.29,0,0,0-2.91.49,3.39,3.39,0,0,0-1.58,1.36,6.8,6.8,0,0,0-.88,2.41l-.29,0,.23-4.69H54.79L55,9l-.29,0a6.22,6.22,0,0,0-1.07-2.67,4,4,0,0,0-2.13-1.3,16.11,16.11,0,0,0-4-.34V17.68a9,9,0,0,0,.15,1.93,2,2,0,0,0,.54,1,2,2,0,0,0,.8.54,4.29,4.29,0,0,0,1.18.2v.29H42.08v-.29a4.3,4.3,0,0,0,1.19-.2,2.14,2.14,0,0,0,.81-.54,2.17,2.17,0,0,0,.54-1,9.79,9.79,0,0,0,.14-1.93Z" transform="translate(-1.22 -3.9)"/></svg>
            </Link>
            <nav className='big-nav'>
                <Design />
                <Link to={'/reader'}>Reader</Link>
                <Resources />
                <Link to={'/blog'}>Blog</Link>
                <About />
            </nav>
            {/* prettier-ignore */}
            {/* <svg xmlns='http://www.w3.org/2000/svg' className='small-nav' viewBox='0 0 50 50'><path d='M5 8a2 2 0 1 0 0 4h40a2 2 0 1 0 0-4H5zm0 15a2 2 0 1 0 0 4h40a2 2 0 1 0 0-4H5zm0 15a2 2 0 1 0 0 4h40a2 2 0 1 0 0-4H5z' /></svg> */}
            <CloseIcon/>
            <SideMenu />
        </div>
    );
}

export default Header;

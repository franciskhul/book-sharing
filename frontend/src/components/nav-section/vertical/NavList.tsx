import { useState, ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// @mui
import { Link } from '@mui/material';
import NavItem from './NavItem';
import { getActive, isExternalLink } from '..';

interface Item {
    title: string;
    path: string;
    children?: ReactNode;
}

interface NavListProp {
    isCollapse: boolean;
    hasChildren: boolean;
    depth: number;
    data: Item
}

export default function NavList({ data, depth, hasChildren, isCollapse = false }: NavListProp) {
    const navigate = useNavigate();

    const { pathname } = useLocation();

    const active = getActive(data.path, pathname);

    const [open, setOpen] = useState(active);

    const handleClickItem = () => {
        if (!hasChildren) {
            navigate(data.path);
        }
        setOpen(!open);
    }

    return (
        <>
            {isExternalLink(data.path) ? (
                <Link href={data.path} target="_blank" rel="noopener" underline="none">
                    <NavItem item={data}
                        depth={depth}
                        open={open} active={active} isCollapse={isCollapse}
                    />
                </Link>
            ) : (
                <NavItem
                    item={data}
                    depth={depth}
                    open={open}
                    active={active}
                    isCollapse={isCollapse}
                    onClick={handleClickItem}
                />
            )}
        </>
    )
}

// ----------------------------------------------------------------------
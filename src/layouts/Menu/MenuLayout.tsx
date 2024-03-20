import { NavLink, Outlet, useLocation } from 'react-router-dom';
import styles from './MenuLayout.module.css';
import Button from '../../components/Button/Button';
import { useEffect } from 'react';
import cn from 'classnames';

export function MenuLayout() {

	const location = useLocation();

	useEffect(() => {
		console.log(location);
	}, [location]);
    
	return (
		<div className={styles['layout']}>
			<div className={styles['sidebar']}>
				<div className={styles['user']}>
					<img src="/avatar.png" alt="Аватар пользователя" />
					<div className={styles['name']}>Антон Горохов</div>
					<div className={styles['email']}>gorohov@ya.ru</div>
				</div>
				<div className={styles['menu']}>
					<NavLink to='/' className={({ isActive }) => cn(styles['link'], {
						[styles.active]: isActive
					})}>
						<img src="/menu-icon.svg" alt="Иконка меню" />
                        Меню
					</NavLink>

					<NavLink to='/cart' className={({ isActive }) => cn(styles['link'], {
						[styles.active]: isActive
					})}>
						<img src="/cart-icon.svg" alt="Иконка корзины" />
                        Корзина
					</NavLink>

				</div>
				<Button className={styles['exit']}>
					<img src="/exit-icon.svg" alt="Иконка выхода" />
                    Выход
				</Button>
			</div>
			<div className={styles['content']}>
				<Outlet />
			</div>
		</div>
	);
}
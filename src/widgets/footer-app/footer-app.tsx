import styles from './footer-app.module.css';

import { Home } from '@/pages/home/home';
import account from '@/shared/assets/svg/account.svg';
import cart from '@/shared/assets/svg/cart.svg';
import catalog from '@/shared/assets/svg/catalog.svg';
import home from '@/shared/assets/svg/home.svg';
import like from '@/shared/assets/svg/like.svg';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs/tabs';

export const FooterApp = () => {
  return (
    <div className={styles.footer}>
      <Tabs defaultValue='home'>
        <TabsList className={styles.tabs}>
          <TabsTrigger value='home'>
            <img src={home} alt='home' />
          </TabsTrigger>
          <TabsTrigger value='catalog'>
            <img src={catalog} alt='catalog' />
          </TabsTrigger>
          <TabsTrigger value='favorite'>
            <img src={like} alt='favorite' />
          </TabsTrigger>
          <TabsTrigger value='cart'>
            <img src={cart} alt='cart' />
          </TabsTrigger>
          <TabsTrigger value='account'>
            <img src={account} alt='account' />
          </TabsTrigger>
        </TabsList>
        <TabsContent value='home'>
          <Home />
        </TabsContent>
        <TabsContent value='catalog'>
          <div className='content'>catalog</div>
        </TabsContent>
        <TabsContent value='favorite'>
          <div>favorite</div>
        </TabsContent>
        <TabsContent value='cart'>
          <div>cart</div>
        </TabsContent>
        <TabsContent value='account'>
          <div>account</div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

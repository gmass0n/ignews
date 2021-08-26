import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { stripe } from "../services/stripe";

import { SubscribeButton } from "../components/SubscribeButton";

import styles from "../styles/home.module.scss";
import { formatPrice } from "../utils/formatPrice";

interface StripeProduct {
  priceId: string;
  amount: number;
  formattedAmount: string;
}
interface HomeProps {
  product: StripeProduct;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const price = await stripe.prices.retrieve("price_1JSkQDA6anyFBtl8PlZ3t84q");

  const priceAmount = price.unit_amount / 100;

  const product: StripeProduct = {
    priceId: price.id,
    amount: priceAmount,
    formattedAmount: `${formatPrice(priceAmount)}/${price.recurring.interval}`,
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

const Home: NextPage<HomeProps> = ({ product }) => {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <div>
          <div>
            <section className={styles.hero}>
              <span>👏 Hey, welcome</span>

              <h1>
                News about
                <br />
                the <span>React</span> world.
              </h1>

              <p>
                Get access to all the publications
                <br />
                <span>for {product?.formattedAmount}</span>
              </p>

              <SubscribeButton priceId={product?.priceId} />
            </section>

            <Image
              src="/images/avatar.svg"
              alt="Girl coding"
              width={340}
              height={530}
              objectFit="contain"
              quality={1}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

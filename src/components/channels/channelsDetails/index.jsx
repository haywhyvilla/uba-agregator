"use client"

import { Button } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { back } from '@/src/utility/svg';
import styles from "./details.module.scss"

export default function Details() {
    const router = useRouter();
    return (
        <section>
            <div className={styles.detailsHeader}>
                <div className={styles.detailsHead}>
                    <div className={styles.goBack}>
                        <Button onClick={() => router.back()} className={styles.antBtn}>
                            {back}
                            <span>Go back</span>
                        </Button>
                    </div>
                    <div className={styles.details}>
                        <h4 className={styles.tabs}>Channel Details</h4>
                    </div>
                    <div className="col-auto go-back d-none d-lg-block">
                        <Link href={'/'} style={{ visibility: 'hidden' }}>
                            {back}
                            <span>Go back</span>
                        </Link>
                    </div>
                </div>

                <div className={styles.channelDetails}>

                </div>

            </div>

        </section>
    )
}
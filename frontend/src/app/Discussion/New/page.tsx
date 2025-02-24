'use client';

import Link from 'next/link';

import MainPageContent from '../../../Components/page/MainPageContent/MainPageContent';
import Page from '../../../Components/page/page';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function NewDiscussion() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <h1>Starting a new discussion</h1>
                        <p>
                            We use the GitHub{' '}
                            <Link href='https://GitHub.com/Freely-Given-org/OpenEnglishTranslation--OET/discussions'>
                                discussion pages
                            </Link>{' '}
                            for open, online discussions, so feel free to join
                            in with an existing discussion or start a new one.
                        </p>
                        <p>
                            Alternatively, you can submit a question or comment
                            from{' '}
                            <Link href='/About/Contact'>our contact page</Link>,
                            and then we’ll either open a discussion ourselves,
                            or add it to{' '}
                            <Link href='/Discussion/FAQ'>our FAQ Page</Link>{' '}
                            with our response.
                        </p>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default NewDiscussion;

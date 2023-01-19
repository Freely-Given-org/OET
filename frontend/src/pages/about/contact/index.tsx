import Link from 'next/link';

import MainPageContent from '../../../Components/page/MainPageContent/MainPageContent';
import Page from '../../../Components/page/page';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function Contact() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <h1>Contacting the Editors</h1>
                        <p>
                            The <em>Open English Translation</em> of the Bible
                            is a product of{' '}
                            <Link href='https://Freely-Given.org'>
                                Freely-Given.org
                            </Link>
                            . It is offered to the world as a free gift in the
                            same way that the original scriptures were created
                            without thought of profit. To contact the editors
                            with corrections or suggestions, please email Freely
                            (dot) Given (dot) org (at) gmail (dot) com.
                        </p>
                        <p>
                            Note: Of course you don’t need to contact us to
                            request permission to use the Open English
                            Translation—that permission is granted in advance!
                        </p>
                        <h1>Volunteering</h1>
                        <p>
                            We’re currently looking for volunteers to help with
                            this work. This includes both Bible people
                            (translators and consultants and readers and
                            checkers) as well as software people (developers and
                            designers). Please use the above contact method to
                            get in touch.
                        </p>
                        <p>
                            Any volunteers must agree in writing in advance that
                            their work will become the property of
                            Freely-Given.org, and thus made publicly available
                            under an open licence. Of course we’re happy to
                            credit any contributors (if they desire).
                        </p>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default Contact;

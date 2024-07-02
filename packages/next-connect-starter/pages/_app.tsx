import { WalletEntryPosition } from '@particle-network/auth';
import {
    Avalanche,
    Ethereum,
    EthereumSepolia,
    KCCTestnet,
    Moonbeam,
    Moonriver,
    Optimism,
    PlatON,
    Polygon,
    Solana,
} from '@particle-network/chains';
import { evmWallets, solanaWallets } from '@particle-network/connect';
import { ModalProvider } from '@particle-network/connect-react-ui';
import '@particle-network/connect-react-ui/esm/index.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: any) {
    return (
        <ModalProvider
            walletSort={['Particle Auth', 'Wallet']}
            particleAuthSort={[
                'email',
                'phone',
                'google',
                'apple',
                'facebook',
                'microsoft',
                'linkedin',
                'github',
                'discord',
            ]}
            options={{
                projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
                clientKey: process.env.NEXT_PUBLIC_CLIENT_KEY as string,
                appId: process.env.NEXT_PUBLIC_APP_ID as string,
                chains: [
                    PlatON,
                    Optimism,
                    Moonbeam,
                    Moonriver,
                    Avalanche,
                    Polygon,
                    Ethereum,
                    EthereumSepolia,
                    Solana,
                    KCCTestnet,
                ],
                particleWalletEntry: {
                    displayWalletEntry: true,
                    defaultWalletEntryPosition: WalletEntryPosition.BR,
                    supportChains: [Ethereum, EthereumSepolia],
                },
                wallets: [
                    ...evmWallets({
                        projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string,
                        showQrModal: false,
                    }),
                    ...solanaWallets(),
                ],
            }}
            language="en"
            theme={'light'}
        >
            <Component {...pageProps} />
        </ModalProvider>
    );
}

export default MyApp;

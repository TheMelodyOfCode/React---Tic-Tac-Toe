import { ErrorBoundary } from 'react-error-boundary';

import Header from './components/header/header.component.jsx';
import Game from './components/game/game.component.jsx'

function ErrorFallback({error, resetErrorBoundary,}) {
  return (
    <section className="game">
        <div className="game__board"> 
          <div className="game__board--rowsContainer">
            <h2 className="cardItem__card__title" >Error: </h2>
            <h5 className="cardItem__card__content" > {error.message}</h5>
          </div>
        </div>
  </section>
  )
}

function App() {
  return (
      <main className="container">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Header />
          <Game />
        </ErrorBoundary>
      </main>
  );
}

export default App;

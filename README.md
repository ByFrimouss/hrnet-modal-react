# @byfrimouss/hrnet-modal-react

> Composant Modal React accessible et animé — converti depuis le plugin jQuery.modal.js de l'application HRnet WealthHealth.

## Installation

```bash
npm install @byfrimouss/hrnet-modal-react
```

## Utilisation

```jsx
import { useState } from "react";
import Modal from "@byfrimouss/hrnet-modal-react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Ouvrir la modale</button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Succès !"
        message="L'employé a bien été créé."
      />
    </>
  );
}
```

## Props

| Prop     | Type     | Obligatoire | Défaut | Description                         |
| -------- | -------- | ----------- | ------ | ----------------------------------- |
| isOpen   | boolean  | ✅          | —      | Contrôle la visibilité de la modale |
| onClose  | function | ✅          | —      | Appelée pour fermer la modale       |
| title    | string   | ❌          | ''     | Titre affiché en haut               |
| message  | string   | ❌          | ''     | Message principal                   |
| children | node     | ❌          | null   | Contenu JSX personnalisé            |

## Fonctionnalités

- ✅ Fermeture par clic sur l'overlay
- ✅ Fermeture par touche Escape
- ✅ Blocage du scroll du body quand ouverte
- ✅ Attributs ARIA (accessibilité)
- ✅ Animation CSS (fadeIn + slideUp)
- ✅ Zéro dépendance externe (hors React)

## Licence

MIT

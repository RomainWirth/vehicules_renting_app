# vehicules_renting_app

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Routes API Vehicules
| Route                                       | Méthode | Description                     |
|---------------------------------------------|---------|---------------------------------| 
| `http://localhost:9092/vehicules`           | GET     | Lister tous les véhicules       |
| `http://localhost:9092/vehicules/{id}`      | GET     | Lister un véhicule avec son id  |
| `http://localhost:9092/vehicules/available` | POST    | Liste les véhicules disponibles |
| `http://localhost:9092/vehicules`           | POST    | Ajouter un nouveau véhicule     |
| `http://localhost:9092/vehicules/{id}`      | PUT     | Modifier un véhicule            |
| `http://localhost:9092/vehicules/{id}`      | DELETE  | Supprimer un véhicule           |

## Routes API Reservation
| Route                                                                                                              | Méthode | Description                                |
|--------------------------------------------------------------------------------------------------------------------|---------|--------------------------------------------| 
| `http://localhost:9091/reservations`                                                                               | POST    | Créer une réservation                      |
| `http://localhost:9091/reservations/{id}`                                                                          | PUT     | Modifier sa réservation                    |
| `http://localhost:9091/reservations/{id}`                                                                          | GET     | Voir sa réservation                        |
| `http://localhost:9091/reservations/{id}`                                                                          | DELETE  | Supprimer sa réservation                   |
| `http://localhost:9091/reservations/available-vehicules/{userReservationStartingDate}/{userReservationEndingDate}` | GET     | Afficher un véhicule dispo selon les dates |
| `http://localhost:9091/reservations`                                                                               | GET     | Voir toutes les réservations               |

## Routes API Utilisateurs

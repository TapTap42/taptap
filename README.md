# TapTap MVP

## Avvio locale
1. Crea un progetto Supabase.
2. Esegui `supabase/schema.sql` nel SQL Editor.
3. Copia `.env.example` in `.env.local` e inserisci le chiavi Supabase.
4. In PowerShell, dentro questa cartella, esegui `npm.cmd install`.
5. Poi `npm.cmd run dev`.
6. Apri http://localhost:3000

## Demo
- Review page: http://localhost:3000/r/oliviero
- Admin: http://localhost:3000/admin

## Importante
La chiave `SUPABASE_SERVICE_ROLE_KEY` è segreta e non va pubblicata.
Prima di usare TapTap con clienti reali, sostituisci il link Google demo nel database con il link reale dell'attività.

## Nota
La versione aggiornata include il root layout HTML richiesto da Next.js e il path alias `@/*`.

require('module-alias/register');
const http = require('http')
const BudgetManagerAPI = require('@BudgetManagerAPI')
const BudgetManagerServer = http.Server('BudgetManagerAPI'),
const BudgetManagerPORT = porcess.env.PORT || 3001
const LOCAL = '0.0.0.0';

BudgetManagerAPI.Server.listen(BudgetManagerPORT, LOCAL, () => console.log(`BudgetManagerAPI running on ${BudgetManagerPORT}`));


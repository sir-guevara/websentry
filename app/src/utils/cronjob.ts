import cron from 'node-cron';
import { domainUpdate, getAllActiveMonitors } from './utils';



const job =  cron.schedule(
	'0 */5 * * * *', // cronTime
	async function () {
        try {
            const  monitors = await getAllActiveMonitors();
            for (let i = 0; i < monitors.length; i++){
                await domainUpdate(monitors[i])
                console.log(i, " monitor updated")
            }
        } catch (error) {
            console.log(error)
        }
		
	},
);


export default job;
import { CronJob } from 'cron';
import { domainUpdate, getAllActiveMonitors } from './utils';



const job = new CronJob(
	'0 */5 * * * *', // cronTime
	async function () {
		const  monitors = await getAllActiveMonitors();
        for (let i = 0; i < monitors.length; i++){
            await domainUpdate(monitors[i])
            console.log(i, " monitor updated")
        }
	},
);


export default job;
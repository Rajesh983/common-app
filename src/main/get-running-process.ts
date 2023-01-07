import {exec} from 'child_process'

export async function isProcessRunning(): Promise<string[]> {
  const cmd = (() => {
    switch (process.platform) {
      case 'win32': return `wmic process get Caption,ProcessId`
      case 'darwin': return `ps -cx -o pid,command`
      case 'linux': return `ps -cx -o pid,command`
      default: return false
    }
  })()

  if( ! cmd ) {
    return [];
  }

  return new Promise((resolve, reject) => {
    exec(cmd, (err: Error | null, stdout: string, stderr: string) => {
      if (err) reject(err)

      resolve(stdout.split('\n'))
    })
  })
}
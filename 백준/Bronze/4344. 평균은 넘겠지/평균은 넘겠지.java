import java.util.Scanner;

public class Main {
	
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		
		int c=sc.nextInt();
		double [] ar = new double [c];
		double [] arr = new double [1000];
		double hap=0, cnt=0;
		double avg=0, per=0;
		
		for(int i=0;i<ar.length;i++) {
			int n=sc.nextInt();
			for(int j=0;j<n;j++) {
				arr[j]=sc.nextDouble();
				hap+=arr[j];
			}
			avg=hap/n;
			for(int j=0;j<n;j++) {
				if(arr[j]>avg)
					cnt++;
			}
			per=((cnt/n)*100);
			ar[i]=per;
			
			hap=0; avg=0; cnt=0;
		}
		
		for(int i=0;i<ar.length;i++) {
			System.out.println(String.format("%.3f", ar[i])+"%");
		}
		
	}
}
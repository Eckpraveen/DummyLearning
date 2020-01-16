package ExcelOperation;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;


 
public class ExcelReading {

	public static void main(String[] args) throws IOException {
		FileInputStream fis=new FileInputStream(new File("C:\\Users\\praveen.das\\Documents\\JAVA_JAR\\POI\\testsheet.xlsx"));  

		XSSFWorkbook wb= new XSSFWorkbook(fis);
		//XSSFSheet sheet=wb.getSheetAt(0);  
		XSSFSheet sheet=wb.getSheet("Sheet1");  
		
		//Scanner scn= new Scanner(System.in);
		//System.out.println(");
		System.out.println(sheet.getRow(8).getLastCellNum());
		System.out.println(sheet.getRow(8).getPhysicalNumberOfCells());

		
		



	}

}

import { three } from "maath";
import {
  P2P,
  Venture,
  Banker,
  angel,
  YES_BANK,
  PnB,
  IDFC,
  ICICI,
  HSBC,
  HDFC,
  Canara,
  DCB,
  AXIS,
  BOB,
  IndusInd,
  JP_Morgan,
  Olymp_Trade,
  Quicken,
  M1,
  StockMarketEye,
  Mutual_Fund,
 Morgan_Stanley,
  crypto,
  SBI,
  a11,a12,a13,a14,a15,a16,
  a21,a22,a23,a24,a25,a26,
  a31,a32,a33,a34,a35,a36,
  a41,a42,a43,a44,a45,a46,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "invest",
    title: "How to invest",
  },
  {
    id: "trends",
    title: "Changing Trends",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Angel_Investor",
    icon: angel,
  },
  {
    title: "Peer-to-Peer_Lender",
    icon: P2P,
  },
  {
    title: "Venture_Capitalist",
    icon: Venture,
    source_code_link:"../About3"
  },
  {
    title: "Banker",
    icon: Banker,
    source_code_link:"../About4"
  },
];

const banklogo = [
  {
    name: "YES BANK",
    icon: YES_BANK,
  },
  {
    name: "IndusInd",
    icon: IndusInd,
  },
  {
    name: "PnB",
    icon: PnB,
  },
  {
    name: "IDFC",
    icon: IDFC,
  },
  {
    name: "ICICI",
    icon: ICICI,
  },
  {
    name: "HSBC",
    icon: HSBC,
  },
  {
    name: "HDFC",
    icon: HDFC,
  },
  {
    name: "DCB",
    icon: DCB,
  },
  {
    name: "Canara",
    icon: Canara,
  },
  {
    name: "BOB",
    icon: BOB,
  },
  {
    name: "AXIS",
    icon: AXIS,
  },
  {
    name: "JP Morgan",
    icon: JP_Morgan,
  },
  {
    name: "SBI",
    icon: SBI,
  },
];

const InvestmentStepss = [
  {
    //how to invest
    title: "Setting Investment Goals",
    company_name: "Quicken",
    icon: Quicken,
    iconBg: "#383E56",
    date: "Step-1",
    points: [
      "The first step of investing is to define your investment goals",
      "This will help you determine what type of investment you should make",
      "You should set your investment goals based on your financial situation, risk tolerance, and time horizon",
    ],
  },
  {
    title: "Asset Allocation",
    company_name: "M1-Finance",
    icon: M1,
    iconBg: "#E6DEDD",
    date: "Step-2",
    points: [
      "Asset allocation is the process of dividing your investment portfolio into different asset classes like stocks, bonds, and cash",
      "This step helps you create a diversified portfolio that balances risk and reward based on your investment goals and risk tolerance",
    ],
  },
  {
    title: "Portfolio Management",
    company_name: "StockMarketEye",
    icon: StockMarketEye,
    iconBg: "#383E56",
    date: "Step-3",
    points: [
      "Once you have established your investment goals and asset allocation, the next step is to manage your portfolio.",
       "This includes monitoring your investments and making adjustments when necessary", 
       "It also includes rebalancing your portfolio periodically to maintain your desired asset allocation",
    ],
  },
  {
    title: "Regular Monitoring and Review",
    company_name: "Olymp_Trade",
    icon: Olymp_Trade,
    iconBg: "#E6DEDD",
    date: "Final Step",
    points: [
      "The final step is to regularly monitor and review your portfolio to ensure it is aligned with your investment goals and asset allocation",
      "This step is important as your investment goals, risk tolerance, and financial situation may change over time, requiring adjustments to your portfolio",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "It was originally difficult for me to start investing however HS studios ltd have helped in every step.",
    name: "Aditya Nangarath",
    designation: "CFO",
    company: "Meta Co",
    image: "https://randomuser.me/api/portraits/men/81.jpg",
  },
  {
    testimonial:
      "HS is an excellent platform to invest Hemang and Siddharth have helped us a lot in investement of our resources",
    name: "Vishakha Shankar",
    designation: "CFO",
    company: "OPENAI",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
  },
  {
    testimonial:
      "I dont know much about investement but HS gave me a full head through it",
    name: "Varnit Mittal",
    designation: "Principal",
    company: "Bal Niketan",
    image: "https://randomuser.me/api/portraits/men/39.jpg",
  },
];

const projects = [
  {
    //changing trends
    name: "Mutual Funds",
    description:
      "The first steps to any investment is started by a small scale mutual investment.This involves small scale investing and Trends well in a long run. Therefore do it if you can wait",
    image: Mutual_Fund,
    source_code_link: "https://www.investor.gov/introduction-investing/investing-basics/investment-products/mutual-funds-and-exchange-traded-1#:~:text=What%20are%20mutual%20funds%3F,buy%20shares%20in%20mutual%20funds.",
  },
  {
    name: "Rapid Stock",
    description:
      "Rapid stock exchange is an advanced technique, This follows either selling stocks and squaring off position or buying and stocks and securring position",    

    image: Morgan_Stanley,
    source_code_link: "https://www.bseindia.com/",
  },
  {
    name: "Cryptos and Bitcoins",
    description:
      " The recent developments have shown people shifting to the world of crypto.This is a highly profitable part and that too its not fully explored.This involves crypto mining.",

    image: crypto,
    source_code_link: "https://crypto.com/",
  },
];

//Angel investor
const about1 = [
  {
    //Angel Investor
    name: "Understand the risks: ",
    color: "pink-text-gradient",
    description:
      "Investing in startups comes with a high degree of risk, as many startups fail to become profitable or even go out of business. It's important to understand and be comfortable with the risks before investing.",
    image: a11,
  },
  {
    name: "Make investment strategy:",
    description:
      "Decide how much you are willing to invest, how often you want to invest, and what types of startups you want to invest in. Having a clear investment strategy can help you make more informed decisions and maximize your returns.",    

    image: a12,
  },
  {
    name: "Build a network:",
    description:
      "Develop a network of other investors, entrepreneurs, and industry experts who can provide insights and guidance on potential investments.",
    image: a13,
  },
  {
    name: "Conduct due diligence: ",
    description:
      "Before investing, conduct thorough research on the startup and its founders, including their track record, business plan, financials, and market potential.",
    image: a14,
  },
  {
    name: "Negotiate terms: ",
    description:
      "Work with the startup's founders and other investors to negotiate favorable terms, including equity, valuation, and any shareholder rights or protections.",
    image: a15,
  },
  {
    name: "Provide support: ",
    description:
      "As an angel investor, you can provide valuable support to startups beyond just funding. Consider offering mentorship, connections, and strategic guidance to help the startup succeed.",
    image: a16,
  },

];

//P2P Investing
const about2 = [
  {
    name: "Access to Funding: ",
    color: "pink-text-gradient",
    description:
    "Peer-to-peer lending provides an alternative source of funding for borrowers This can include individuals or small businesses who have limited credit history or may not meet the stringent requirements of banks.",
    image: a21,
  },
  {
    name: "Competitive Interest Rates: ",
    color: "pink-text-gradient",
    description:
    "Since peer-to-peer lending platforms operate online and have lower overhead costs compared to traditional financial institutions, they can offer more competitive interest rates to both borrowers and lenders.",
    image: a22,
  },
  {
    name: "Diversification:",
    color: "pink-text-gradient",
    description:
    "Peer-to-peer lending allows investors to diversify their portfolio by investing in multiple loans, spreading their risk across a range of borrowers and industries. This can reduce the impact of defaults on their overall returns.",
    image: a23,
  },
  {
    name: "Transparency: ",
    color: "pink-text-gradient",
    description:
    "Peer-to-peer lending platforms typically provide detailed information about the borrowers, including their credit score, income, and purpose of the loan. This transparency can help investors make informed decisions about which loans to invest in.",
    image: a24,
  },
  {
    name: "Flexibility: ",
    color: "pink-text-gradient",
    description:
    "Peer-to-peer lending allows borrowers to access funding quickly and on their own terms. Borrowers can choose the amount they need, the repayment period, and the interest rate they are willing to pay.Hence its better than traditional system",
    image: a25,
  },
  {
    name: "Social Impact: ",
    color: "pink-text-gradient",
    description:
    "Peer-to-peer lending can have a positive social impact by providing funding to underserved communities or supporting small businesses. This can help to create jobs, promote economic growth, and reduce financial inequality.",
    image: a26,
  },

];

//Venture Capital
const about3 = [
  {
    name: "Thorough market analysis: ",
    color: "pink-text-gradient",
    description:
    "A successful venture capitalist must have a deep understanding of the market in which they are investing. They must be able to identify emerging trends, potential disruptions, and the competitive landscape. ",
    image: a31,
  },
  {
    name: "Strong network:",
    color: "pink-text-gradient",
    description:
    "A venture capitalist must have a strong network of contacts in the industry. This includes other investors, entrepreneurs, and industry experts who can provide valuable insights and connections.Hence build your network",
    image: a32,
  },
  {
    name: "Risk assessment:",
    color: "pink-text-gradient",
    description:
    "Investing in startups is inherently risky, and venture capitalists must have the ability to assess and manage that risk. They must be able to identify potential risks and mitigate them through careful due diligence.",
    image: a33,
  },
  {
    name: "Financial acumen: ",
    color: "pink-text-gradient",
    description:
    "Venture capitalists must have a strong understanding of financial metrics and performance indicators. They must be able to analyze financial statements, market data, and industry benchmarks to determine the potential success of a startup.",
    image: a34,
  },
  {
    name: "Entrepreneurial mindset:",
    color: "pink-text-gradient",
    description:
    "A successful venture capitalist must be able to think like an entrepreneur. They must be creative, resourceful, and able to identify opportunities that others may not see.If you have that fire then this is your forte",
    image: a35,
  },
  {
    name: "Communication skills: ",
    color: "pink-text-gradient",
    description:
    "Venture capitalists must have strong communication skills, both written and verbal. They must be able to clearly and concisely explain their investment thesis, provide feedback to entrepreneurs, and negotiate deal terms.",
    image: a36,
  },

];
//Banker
const about4 = [
  {
    name: "Financial advice: ",
    color: "pink-text-gradient",
    description:
    "Bankers can provide valuable financial advice to individuals and businesses. They can help clients create a budget, manage debt, and develop a financial plan for the future.",
    image: a41,
  },
  {
    name: "Have Banking products: ",
    color: "pink-text-gradient",
    description:
    "Bankers can help clients access a wide range of banking products and services, including checking and savings accounts, loans, credit cards, and investment accounts.",
    image: a42,
  },
  {
    name: "Assistance with loans: ",
    color: "pink-text-gradient",
    description:
    "Bankers can assist clients with the loan application process, including evaluating the client's creditworthiness, determining the loan amount, and setting the terms and interest rates.",
    image: a43,
  },
  {
    name: "Risk management: ",
    color: "pink-text-gradient",
    description:
    "Bankers can help clients manage financial risks associated with investments, loans, and other financial transactions. They can provide guidance on hedging strategies and insurance products that can help mitigate risk.",
    image: a44,
  },
  {
    name: "Fraud prevention: ",
    color: "pink-text-gradient",
    description:
    "Bankers play an important role in preventing financial fraud and identity theft. They use sophisticated fraud detection systems to monitor transactions and can alert clients if they detect any suspicious activity.",
    image: a45,
  },
  {
    name: "Access finance markets: ",
    color: "pink-text-gradient",
    description:
    "Bankers can provide clients with access to financial markets, including stocks, bonds, and mutual funds. They can help clients create a diversified investment portfolio that meets their financial goals and risk tolerance.",
    image: a46,
  },

];

export { services, banklogo, InvestmentStepss, testimonials, projects, about1, about2, about3, about4};